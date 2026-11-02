# 🛒 Bazar-Dor

**Bazar-Dor** is a Bangla-based grocery price tracking application designed to help users explore daily essential product prices in Bangladesh. It provides an easy way to browse products, explore categories, compare prices, and stay informed about market updates through a clean and responsive interface.

## ✨ Features

- **Daily Market Updates:** Explore today's market prices and price updates for essential products.
- **Product Browsing:** Browse a collection of grocery and daily essential products.
- **Category Filtering:** Explore products by category for easier navigation.
- **Price Sorting:** Sort products from low to high or high to low.
- **Product Details:** View detailed information about individual products.
- **User Authentication:** Register and sign in using email and password, Google, or GitHub.
- **User Profile:** View profile information and update your account name.
- **Protected Routes:** Restrict access to selected pages for authenticated users.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop devices.
- **Loading & Notifications:** User-friendly loading states and toast notifications.

## 🛠️ Technologies Used

| Technology         | Purpose                               |
| ------------------ | ------------------------------------- |
| Next.js 16         | React framework and App Router        |
| React 19           | Building user interfaces              |
| TypeScript         | Type safety                           |
| Tailwind CSS 4     | Styling and responsive design         |
| DaisyUI 5          | UI components                         |
| HeroUI             | Form and interface components         |
| Better Auth        | Authentication and session management |
| MongoDB            | Database                              |
| React Icons        | Icons                                 |
| React Toastify     | Toast notifications                   |
| React Marquee Text | Scrolling market updates              |

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/rahadshek/bazar-dor.git
```

### 2. Navigate to the Project Directory

```bash
cd bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and configure the required environment variables.

````env
# Database
MONGOBD_URL=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_SECRET=

# GitHub OAuth
GITHUB_CLIENT_ID=
GITHUB_SECRET=


**Important:** Never commit your `.env.local` file or expose your database credentials and OAuth secrets publicly.

Make sure your environment variable names match the ones used in your project configuration.

### 5. Run the Development Server

```bash
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint                           |

## 📁 Project Structure

```text
bazar-dor/
├── public/                 # Static assets
├── src/
│   └── app/
│       ├── (auth)/         # Authentication pages
│       ├── componantes/    # Shared UI components
│       ├── products/       # Product listing pages
│       ├── category/       # Category pages
│       ├── details/        # Product details
│       ├── profile/        # User profile pages
│       ├── lib/            # Authentication and utilities
│       ├── layout.tsx      # Root layout
│       └── page.tsx        # Home page
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

_Note: This is a simplified overview of the project structure._

## 🔐 Authentication

Bazar-Dor uses **Better Auth** with MongoDB for authentication and session management.

Supported authentication methods:

- Email and password
- Google OAuth
- GitHub OAuth

Some application pages require users to sign in before accessing them.

## 🌐 API

Product and category information is retrieved from the Bazar-Dor API.

**Base API URL:**

```text
https://openapi.programming-hero.com/api/bazardor
```

## 🚀 Deployment

The application can be deployed using [Vercel](https://vercel.com/).

Before deployment:

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Add the production URL to your Better Auth and OAuth configuration.
5. Deploy the application.

## 👨‍💻 Author

**Rahad Shek**

- GitHub: [@rahadshek](https://github.com/rahadshek)
- Repository: [Bazar-Dor](https://github.com/rahadshek/bazar-dor)

---

⭐ If you find this project useful, consider giving it a star!

**Built with 💚 for a smarter grocery shopping experience.**
