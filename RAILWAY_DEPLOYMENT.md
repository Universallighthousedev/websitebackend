# Universal Lighthouse Backend - Railway Deployment Guide

## 🚀 Railway Deployment Instructions

### Prerequisites
1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Push your code to GitHub
3. **PostgreSQL Database**: Railway will provide this

### Step 1: Deploy to Railway

1. **Connect to Railway**:
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login to Railway
   railway login
   ```

2. **Create New Project**:
   ```bash
   # Initialize Railway project
   railway init
   
   # Link to existing project (optional)
   railway link [project-id]
   ```

3. **Add PostgreSQL Database**:
   - Go to Railway dashboard
   - Click "New" → "Database" → "PostgreSQL"
   - Railway will automatically provide connection variables

### Step 2: Configure Environment Variables

Set these environment variables in Railway dashboard:

#### Required Variables:
```
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
PAYPAL_CLIENT_ID=your_production_paypal_client_id
PAYPAL_CLIENT_SECRET=your_production_paypal_client_secret
```

#### Database Variables (Auto-provided by Railway):
- `PGHOST` → `DATABASE_HOST`
- `PGPORT` → `DATABASE_PORT`
- `PGUSER` → `DATABASE_USER`
- `PGPASSWORD` → `DATABASE_PASSWORD`
- `PGDATABASE` → `DATABASE_NAME`

### Step 3: Deploy

```bash
# Deploy to Railway
railway up

# Or connect GitHub for automatic deployments
# Go to Railway dashboard → Settings → Connect GitHub
```

### Step 4: Run Migrations (if needed)

```bash
# Connect to Railway environment
railway shell

# Run migrations
npm run migration:run
```

## 🔧 Production Configuration

### Database Settings
- ✅ SSL enabled for production
- ✅ No auto-synchronization in production
- ✅ Migration-based schema management

### Security Features
- ✅ CORS configured for production frontend
- ✅ Input validation with class-validator
- ✅ Environment-based configuration
- ✅ Security headers enabled

### API Endpoints
- Health Check: `GET /api/health`
- Gallery: `GET|POST|PATCH|DELETE /api/gallery`
- Teams: `GET|POST|PATCH|DELETE /api/teams`
- Events: `GET|POST|PATCH|DELETE /api/events`
- Causes: `GET|POST|PATCH|DELETE /api/causes`
- Donations: `POST /api/donations`

## 🧪 Testing Deployment

### Health Check
```bash
curl https://your-app.railway.app/api/health
```

### API Test
```bash
curl https://your-app.railway.app/api/gallery
```

## 📁 File Structure
```
├── Dockerfile              # Container configuration
├── railway.json           # Railway deployment config
├── .env.example           # Environment template
├── src/
│   ├── main.ts            # Application entry point
│   ├── app.module.ts      # Main module with DB config
│   └── data-source.ts     # TypeORM configuration
└── migrations/            # Database migrations
```

## 🔍 Troubleshooting

### Common Issues:
1. **Database Connection**: Ensure all DATABASE_* variables are set
2. **CORS Errors**: Update FRONTEND_URL environment variable
3. **Migration Errors**: Run migrations manually in Railway shell

### Logs:
```bash
# View deployment logs
railway logs

# Follow live logs
railway logs --follow
```

## 🛡️ Security Checklist
- ✅ Environment variables for sensitive data
- ✅ No hardcoded credentials
- ✅ HTTPS/SSL enabled
- ✅ Input validation
- ✅ CORS properly configured
- ✅ Security headers set
