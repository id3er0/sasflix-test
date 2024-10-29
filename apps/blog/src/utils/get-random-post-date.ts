/**
 * Generates a pseudo-random but consistent past date for a given post ID.
 * The date is calculated to be within a certain range of days ago from the current date.
 *
 * @param postId - The unique identifier for the post. This is used to generate a consistent date for each post.
 * @returns A Date object representing a past date that is pseudo-randomly determined based on the postId.
 */
export function getRandomPostDate(postId: number): Date {
  const now = new Date();
  const dayInMs = 24 * 60 * 60 * 1000; // One day in milliseconds.
  const maxDaysAgo = 30; // Define a maximum limit, e.g., up to a year ago or month.

  // Use a pseudo-random but consistent value for each postId by applying a modulus.
  const randomDaysAgo = postId * 1.5 / maxDaysAgo + postId; // Add postId to ensure no less than one-day gap.

  // Set the date by subtracting the computed days from 'now'.
  return new Date(now.getTime() - randomDaysAgo * dayInMs);
}
