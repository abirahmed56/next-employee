# Employee Management System

It is a Next.js-based demo web application for HR to manage employees' details. It is a simple application with some key features sush as sorting, pagination, CRUD operations. 

## Features

- **Image Resizing**: Resizes employee images before storage for optimal performance.
- **Sortable Columns**: Sort by name, email, mobile number, or date of birth.
- **Pagination**: Supports pagination while fetching data from database.
- **CRUD Operations**: 
  - **Add**: Upload a photo and provide details (name, email, mobile, date of birth).
  - **Edit**: Update employee details via an edit page.
  - **Delete**: Confirm deletion with a popup (Yes/No options).
- **Search**: Supports search fot name, email, DOB and phone (partial search for names and emails)

## Tech Stack

- **Next.js**: Framework for server-side rendering and UI.
- **Image Resizing**: Implemented with 'browser-image-compression' library.
- **Pagination**: Database-driven, fetching data in pages.

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/abirahmed56/next-employee.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add environment variables in a `.env` file for database configuration.
4. Start the development server:
   ```bash
   npm run dev
   ```

## Key Functionalities

- **Image Resizing**: Optimizes large image uploads.
- **Sorting**: Sort data by key fields (name, email, etc.).
- **Pagination**: Efficient data fetching, one page at a time.
- **CRUD**: Add, edit, and delete employee records with confirmation prompts.
