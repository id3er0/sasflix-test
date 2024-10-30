export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      delete: 'Delete',
      like: 'Like',
      dislike: 'Trash',
      open_comments: 'Open comments',
      comment: ({ plural }: { plural: (args: string[]) => string }) => plural(['comment', 'comments']),
      deleted_comment: 'This comment has been deleted.',
      revert: 'Return',
      revert_comments: 'Revert deleted comments',
    },
  },
}));
