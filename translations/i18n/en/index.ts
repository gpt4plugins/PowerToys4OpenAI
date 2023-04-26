export default {
  translation: {
    global: {
      save              : 'Save',
      close             : 'Close',
      edit              : 'Edit',
      play              : 'Play',
      record            : 'Record',
      import            : 'Import',
      export            : 'Export',
      upload            : 'Upload',
      cancel            : 'Cancel',
      delete            : 'Delete',
      retry             : 'Retry',
      missing           : 'missing',
      settings          : 'Settings',
      search            : 'Ask a question',
      searchHint        : 'Or expand on a topic',
      authError         : 'Sorry, something went wrong with authentication, please check your API key',
      comingSoon        : 'coming soon',
      donate            : 'Donate {{name}}',
      donateCopy        : '{{name}} address copied to clipboard',
      copiedToClipBoard : 'Content copied to clipboard',
    },
    components: {
      searchCompanion: {
        title      : 'Search Companion',
        login      : 'Login',
        search     : 'Search',
        searchHint : 'Expand on this topic',
        clear      : 'Clear conversation history',
        copy       : 'Copy the result',
      },
      conversations: {
        me              : 'me',
        welcome         : 'Hi there, how may i assist you',
        title           : 'Conversations',
        newConversation : 'New conversation',
        sttHint         : 'Toggle listening with CTRL+SpaceBar',
        sttOn           : 'Speech Recognition: Activated',
        sttOff          : 'Speech Recognition: Deactivated',
        inputHint       : 'You can validate with CTRL+Enter, or use speech recognition with CTRL+SpaceBar',
        wordCount       : 'Word count',
      },
      profiles: {
        title        : 'Profiles',
        newProfile   : 'New profile',
        selectProfile: 'Select a profile',
        selected     : 'Active Profile: {{name}}'

      },
      settings: {
        general : 'General',
        global  : 'Global settings'
      },
      searchSettings: {
        interfaceLanguage       : 'Interface language',
        triggerModeTitle        : 'Trigger Mode',
        triggerModeManual       : 'Manual',
        triggerModeManualHint   : 'Only trigger search on manual click',
        triggerModeQuestion     : 'Question',
        triggerModeQuestionHint : 'Only trigger search if ending with: ?',
        triggerModeAuto         : 'Automatic',
        triggerModeAutoHint     : 'Systematically query the search engine',
        apiKeyTitle             : 'API Key',
        apiKeyHint              : 'Your OpenAI API key'
      }
    },
    pages : {
      profiles :  {
        title       : 'Title',
        active      : 'Active',
        tags        : 'Tags',
        description : 'Description',
        prompt      : 'System prompt',
      }
    },
  }
};
