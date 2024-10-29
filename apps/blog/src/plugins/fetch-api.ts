/**
 * Defines a Nuxt plugin that sets up a custom fetch API client.
 *
 * @returns An object providing the `fetchApi` instance for making HTTP requests.
 */
// noinspection JSUnusedGlobalSymbols
export default defineNuxtPlugin({
  setup() {
    const {
      public: { apiHost },
    } = useRuntimeConfig();

    const fetchApi = $fetch.create({
      baseURL: apiHost,
      // Setup auth with `onRequest`.
      // async onRequest({ request, options }) {},
      onRequestError: (error) => {
        console.warn('fetchApi - onRequestError:', error);
      },
      onResponseError: ({ request, response }) => {
        console.warn('fetchApi - onResponseError - request:', request);
        console.warn('fetchApi - onResponseError - response:', response);
      },
    });

    return {
      provide: {
        fetchApi,
      },
    };
  },
});
