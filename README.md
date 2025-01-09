# Influencer Connect

Influencer Connect is a platform that connects social media influencers (Users) with Brands for collaborative campaigns. Users can post content, participate in brand campaigns, and earn rewards. Brands can create campaigns, manage budgets, and track analytics.

## User Journeys

1. [User Registration and Login](docs/journeys/user-registration-and-login.md) - Sign up as a User or Brand.
2. [Profile Management](docs/journeys/profile-management.md) - Update personal details and add portfolio.
3. [Create a Post](docs/journeys/create-a-post.md) - Post content and tag Brands.
4. [Withdraw Rewards](docs/journeys/withdraw-rewards.md) - Withdraw earned rewards.
5. [Brand Registration and Login](docs/journeys/brand-registration-and-login.md) - Sign up as a Brand.
6. [Create a Campaign](docs/journeys/create-a-campaign.md) - Set up a new campaign.
7. [Admin Dashboard](docs/journeys/admin-dashboard.md) - Manage users, brands, and campaigns.

## External APIs and Services

- **Payment Gateways**: Integration with Razorpay for handling payments.
- **Authentication**: Supabase Auth for user authentication.
- **Analytics**: Umami for analytics tracking.

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_PUBLIC_APP_ID=your_app_id
VITE_PUBLIC_APP_ENV=development
VITE_PUBLIC_SENTRY_DSN=your_sentry_dsn
VITE_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
