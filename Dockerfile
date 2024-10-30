FROM node:20-alpine

# Set variables
ARG NUXT_PUBLIC_API_HOST
ENV NUXT_PUBLIC_API_HOST=${NUXT_PUBLIC_API_HOST}
ENV NEXT_TELEMETRY_DISABLED=1

# Set the working directory inside the container
WORKDIR /app

# Copy files
COPY ./ ./

# Enable PNPM
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm build

# Expose the port the app runs on
#EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
