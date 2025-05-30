# Local Development Setup Guide

## Database Setup Options

### Option 1: Install PostgreSQL Locally (Recommended)

1. **Download and Install PostgreSQL:**
   - Go to https://www.postgresql.org/download/windows/
   - Download PostgreSQL for Windows
   - Run the installer and follow the setup wizard
   - Remember the password you set for the postgres user

2. **Create Database:**
   ```bash
   # Connect to PostgreSQL (you'll be prompted for password)
   psql -U postgres -h localhost

   # Create the database
   CREATE DATABASE universal_lighthouse;

   # Exit psql
   \q
   ```

3. **Update .env file:**
   - Update `DATABASE_PASSWORD` in `.env` file with your postgres password

### Option 2: Use Docker PostgreSQL

1. **Install Docker Desktop** (if not already installed)

2. **Run PostgreSQL in Docker:**
   ```bash
   docker run --name universal-lighthouse-db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=universal_lighthouse -p 5432:5432 -d postgres:latest
   ```

3. **The .env file is already configured for this option.**

### Option 3: Use SQLite for Local Development

If you prefer SQLite for local development, we can modify the configuration.

## Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run database migrations:**
   ```bash
   npm run migration:run
   ```

3. **Start the development server:**
   ```bash
   npm run start:dev
   ```

## Troubleshooting

- Make sure PostgreSQL is running on port 5432
- Verify database credentials in `.env` file
- Check that the database `universal_lighthouse` exists
- Ensure your firewall allows connections to port 5432
