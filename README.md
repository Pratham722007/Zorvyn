# Zorvyn Finance Dashboard

**Your Trusted Partner in Financial Growth.**

Zorvyn is a premium, high-performance financial dashboard built with modern web technologies. It provides a seamless experience for tracking assets, managing transactions, and gaining deep insights into your financial health through beautiful data visualizations.

---

## ✨ Key Features

-   **🏅 Role-Based Dashboard**: Toggle between **Viewer** and **Admin** roles to control data access and management capabilities.
-   **📈 Advanced Analytics**: Interactive Area and Pie charts powered by `Recharts` for real-time balance tracking and expense breakdown.
-   **💸 Transaction Manager**: A robust, split-pane interface to record, categorize, and monitor your income and expenses.
-   **🎨 Premium UI/UX**: 
    -   Immersive **video backgrounds** for a modern landing experience.
    -   Glassmorphism-inspired components with subtle gradients and micro-animations.
    -   Fully **responsive design** with a mobile-optimized navigation system.
-   **⚛️ Reactive State Management**: Global context providers for seamless data synchronization across the entire application.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
-   **Library**: [React 19+](https://reactjs.org/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

-   Node.js (Latest LTS recommended)
-   npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pratham722007/Zorvyn.git
   cd Zorvyn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📂 Project Structure

```text
Zorvyn/
├── app/                  # Next.js App Router directory
│   ├── dashboard/        # Dashboard core logic and pages
│   │   ├── components/   # Reusable UI components (Charts, Tables, etc.)
│   │   ├── context/      # React Context for Roles and Transactions
│   │   ├── data/         # Mock data and constants
│   │   ├── insights/     # Analytics and detailed reporting
│   │   └── transactions/ # Transaction management system
│   ├── layout.tsx        # Global layout configuration
│   └── page.tsx          # Premium landing page
├── public/               # Static assets
└── ...                   # Configuration files (Tailwind, TypeScript, ESLint)
```

---

## 🔐 Role System

Zorvyn implements a simplified Role-Based Access Control (RBAC):

| Role | Permissions |
| :--- | :--- |
| **Admin** | Full access. View analytics, add transactions, and manage data. |
| **Viewer** | Read-only access to analytics and transaction logs. |

*You can switch roles directly from the Dashboard Sidebar to test different permission levels.*

---

## 📜 License

Created with ❤️ by the Pratham.
