// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('../../../util/require_node.js').define(module, '../');
define([], function(){
var E = {};

function get_end_by_period(membership){
    var end = new Date(membership.start);
    if (membership.period=='1 M')
        end.setUTCMonth(end.getUTCMonth()+1);
    else if (membership.period=='6 M')
        end.setUTCMonth(end.getUTCMonth()+6);
    else if (membership.period=='1 Y')
        end.setUTCFullYear(end.getUTCFullYear()+1);
    else
        throw 'Unexpected period: '+membership.period;
    return end;
}

E.get_end_date = function(membership){
    var end = membership && (membership.end || membership.trial_end ||
        membership.start && membership.period &&
        get_end_by_period(membership));
    return end ? new Date(end) : null;
};

E.is_active = function(membership){
    if (!membership)
        return false;
    if (membership.trial_end && Date.now()<=new Date(membership.trial_end))
        return true;
    if (membership.end && Date.now()<=new Date(membership.end))
        return true;
    if (membership.start && membership.period &&
        Date.now()<=get_end_by_period(membership))
    {
        return true;
    }
    return false;
};

E.is_in_trial = function(membership){
    return E.is_trial(membership) && Date.now()<new Date(membership.trial_end);
};

E.is_trial = function(membership){
    return !!membership && !!membership.trial_end; };

// XXX amir: had_trial() should remember if the user *ever* had trial,
// not just look at the last membership
E.had_trial = E.is_trial;

E.is_paid = function(membership){
    return !!membership && !!membership.gateway; };

E.is_expired = function(membership){
    var end_date = E.get_end_date(membership);
    return !!end_date && Date.now()>end_date;
};

return E; }); }());
