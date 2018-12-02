# Path to your oh-my-zsh installation.
  export ZSH=/home/michael/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
#ZSH_THEME="robbyrussell"
ZSH_THEME="mh"
#ZSH_THEME="lambda"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

# User configuration

  export PATH="/home/michael/.local/bin:/home/michael/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/home/michael/MEGA/bin:$PATH"
# export MANPATH="/usr/local/man:$MANPATH"

  export JAVA_HOME=/usr/lib/jvm/default
#  export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_92
  export PATH=$PATH:$JAVA_HOME/bin

source $ZSH/oh-my-zsh.sh

# You may need to manually set your language environment
export LANG=en_US.UTF-8
#export LC_MESSAGES="C"
#export LC_MEASUREMENT=fi_FI.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
   export EDITOR='emacsclient -c'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias s="cd ~/code"
alias g="cd ~/MEGA/code/git-status/"
alias e="emacsclient -c"
alias et="emacsclient -t"
alias v="cd ~/MEGA/vpn/michael.hoogkamer_conf/"
alias c="cd ~/MEGA/code/"
alias m="cd ~/MEGA"
alias t="cd ~/bin/tor-browser_en-US/"
alias b="cd ~/MEGA/bin/"
alias w="cd ~/MEGA/myWritings"
alias ll='ls -alF'
alias r="ranger"
alias a='et -c --eval "(org-agenda-list 1)" "(delete-other-windows)"'
alias ac='et -c --eval "(calendar)" "(org-agenda-list 1)"'

#alias ss="~/bin/suspend.sh"
#alias sh="~/bin/hibernate.sh"
alias ss="systemctl suspend"
alias sh="systemctl hibernate"
alias sa="systemctl hybrid-sleep"

alias gpsmaster="java -jar bin/GpsMaster_0.63.00.jar"

#export PATH="$HOME/.rbenv/bin:$PATH"
#eval "$(rbenv init -)"
#export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"

if [[ $TERMINIX_ID ]]; then
        source /etc/profile.d/vte.sh
fi

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
export PATH=$PATH{}:~/Android/Sdk/tools:~/Android/Sdk/platform-tools

#setterm -blank 5
#source ~/MEGA/bin/lock.sh
