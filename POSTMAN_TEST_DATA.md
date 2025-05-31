# Postman Test Data Guide

## Base URL
- **Local Development**: `http://localhost:3000`
- **Production (Railway)**: `https://universal-lighthouse-production.up.railway.app`

## 1. Causes API Test Data

### POST /causes - Create Cause
```json
{
  "title": "Clean Water Initiative",
  "goal": "Provide clean drinking water to rural communities",
  "category": "Environment",
  "description": "Our mission is to build sustainable water systems in underserved rural areas. This initiative focuses on installing water purification systems, training local communities on maintenance, and ensuring long-term access to clean drinking water.",
  "imageUrl": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500"
}
```

### PUT /causes/:id - Update Cause
```json
{
  "title": "Updated Clean Water Initiative",
  "goal": "Provide clean drinking water to 50 rural communities",
  "category": "Environment & Health",
  "description": "Our expanded mission now targets 50 rural communities with sustainable water systems, advanced purification technology, and comprehensive community training programs.",
  "imageUrl": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600"
}
```

### Additional Cause Test Data
```json
{
  "title": "Education for All",
  "goal": "Build schools and provide quality education",
  "category": "Education",
  "description": "Establishing educational infrastructure in remote areas and providing scholarships to underprivileged children.",
  "imageUrl": "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500"
}
```

```json
{
  "title": "Food Security Program",
  "goal": "Eliminate hunger in local communities",
  "category": "Food & Nutrition",
  "description": "Implementing sustainable farming practices and food distribution networks to ensure food security for vulnerable populations.",
  "imageUrl": "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500"
}
```

## 2. Teams API Test Data

### POST /teams - Create Team Member
```json
{
  "name": "Sarah Johnson",
  "description": "Sarah is our Project Manager with over 8 years of experience in non-profit organizations. She specializes in community outreach and program development, ensuring our initiatives reach those who need them most.",
  "imageUrl": "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=400",
  "contact": "+1-555-0123",
  "email": "sarah.johnson@universallighthouse.org",
  "facebook": "https://facebook.com/sarah.johnson.lighthouse",
  "linkedin": "https://linkedin.com/in/sarah-johnson-nonprofit",
  "twitter": "https://twitter.com/sarah_lighthouse",
  "tiktok": "https://tiktok.com/@sarah_lighthouse"
}
```

### PUT /teams/:id - Update Team Member
```json
{
  "name": "Sarah Johnson - Senior Project Manager",
  "description": "Sarah is our Senior Project Manager and Community Outreach Director with over 10 years of experience in non-profit organizations. She now leads our international expansion efforts.",
  "imageUrl": "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=500",
  "contact": "+1-555-0123",
  "email": "sarah.johnson@universallighthouse.org",
  "facebook": "https://facebook.com/sarah.johnson.lighthouse",
  "linkedin": "https://linkedin.com/in/sarah-johnson-nonprofit",
  "twitter": "https://twitter.com/sarah_lighthouse_senior"
}
```

### Additional Team Members Test Data
```json
{
  "name": "Michael Chen",
  "description": "Michael is our Technology Director, responsible for developing innovative solutions that help us scale our impact. He has a background in software engineering and social entrepreneurship.",
  "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  "contact": "+1-555-0456",
  "email": "michael.chen@universallighthouse.org",
  "linkedin": "https://linkedin.com/in/michael-chen-tech",
  "twitter": "https://twitter.com/mike_tech_good"
}
```

```json
{
  "name": "Dr. Emily Rodriguez",
  "description": "Dr. Rodriguez is our Medical Advisor and Field Coordinator. With her extensive background in public health, she ensures our health-related initiatives meet the highest standards.",
  "imageUrl": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
  "contact": "+1-555-0789",
  "email": "emily.rodriguez@universallighthouse.org",
  "linkedin": "https://linkedin.com/in/dr-emily-rodriguez-mph"
}
```

```json
{
  "name": "James Thompson",
  "description": "James leads our fundraising and partnership development efforts. His experience in corporate relations helps us build sustainable funding for our programs.",
  "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  "contact": "+1-555-0321",
  "email": "james.thompson@universallighthouse.org",
  "facebook": "https://facebook.com/james.thompson.fundraising",
  "linkedin": "https://linkedin.com/in/james-thompson-fundraising",
  "twitter": "https://twitter.com/james_lighthouse"
}
```

## 3. Events API Test Data

### POST /events - Create Event
```json
{
  "title": "Annual Charity Gala",
  "description": "Join us for an elegant evening of dining, entertainment, and fundraising to support our clean water initiatives. The event will feature keynote speakers, live auctions, and networking opportunities.",
  "date": "2025-07-15T19:00:00.000Z",
  "endTime": "2025-07-15T23:00:00.000Z",
  "location": "Grand Ballroom, Metropolitan Hotel, Downtown",
  "imageUrl": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500"
}
```

### PUT /events/:id - Update Event
```json
{
  "title": "Annual Charity Gala - Expanded Edition",
  "description": "Join us for an elegant evening of dining, entertainment, and fundraising to support our clean water and education initiatives. This year features international keynote speakers, silent auctions, live entertainment, and exclusive networking sessions.",
  "date": "2025-07-15T18:30:00.000Z",
  "endTime": "2025-07-16T00:30:00.000Z",
  "location": "Grand Ballroom & Terrace, Metropolitan Hotel, Downtown",
  "imageUrl": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600"
}
```

### Additional Events Test Data
```json
{
  "title": "Community Workshop: Sustainable Living",
  "description": "Learn practical tips for sustainable living while supporting our environmental initiatives. Includes hands-on activities, expert presentations, and take-home resources.",
  "date": "2025-06-20T14:00:00.000Z",
  "endTime": "2025-06-20T17:00:00.000Z",
  "location": "Community Center, 123 Main Street",
  "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500"
}
```

```json
{
  "title": "5K Run for Clean Water",
  "description": "Participate in our annual 5K run to raise funds for clean water projects. Registration includes race packet, t-shirt, and post-race refreshments.",
  "date": "2025-08-10T08:00:00.000Z",
  "endTime": "2025-08-10T11:00:00.000Z",
  "location": "Riverside Park, Starting at Main Pavilion",
  "imageUrl": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"
}
```

```json
{
  "title": "Youth Leadership Summit",
  "description": "Empowering the next generation of changemakers through workshops, mentorship, and collaborative projects focused on social impact.",
  "date": "2025-09-05T09:00:00.000Z",
  "endTime": "2025-09-05T17:00:00.000Z",
  "location": "University Conference Center",
  "imageUrl": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500"
}
```

## 4. Gallery API Test Data

### POST /gallery - Create Gallery Item
```json
{
  "title": "Water Well Installation - Ghana",
  "description": "Our team successfully installed a new water well in a rural community in Ghana, providing clean water access to over 300 families.",
  "imageUrl": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
  "category": "Projects"
}
```

### PUT /gallery/:id - Update Gallery Item
```json
{
  "title": "Water Well Installation - Ghana Community Impact",
  "description": "Our team successfully installed a new water well in a rural community in Ghana, providing clean water access to over 300 families. This project has reduced water-related illnesses by 80% in the area.",
  "imageUrl": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
  "category": "Project Impact"
}
```

### Additional Gallery Test Data
```json
{
  "title": "School Construction - Philippines",
  "description": "Completed construction of a new elementary school serving 150 students in a remote village in the Philippines.",
  "imageUrl": "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500",
  "category": "Education"
}
```

```json
{
  "title": "Community Health Workshop",
  "description": "Health education workshop reaching 200+ community members, focusing on preventive care and nutrition.",
  "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500",
  "category": "Health"
}
```

## 5. Donations API Test Data

### POST /donations - Create Donation
```json
{
  "amount": 150.00,
  "donorName": "Anonymous Donor",
  "donorEmail": "donor@example.com",
  "message": "Keep up the great work! Happy to support your clean water initiatives."
}
```

### Additional Donation Test Data
```json
{
  "amount": 250.00,
  "donorName": "John Smith",
  "donorEmail": "john.smith@email.com",
  "message": "Proud to support your education programs. Education changes lives!"
}
```

```json
{
  "amount": 75.00,
  "donorName": "Maria Garcia",
  "donorEmail": "maria.garcia@email.com",
  "message": "Thank you for all the work you do in our communities."
}
```

```json
{
  "amount": 500.00,
  "donorName": "Corporate Sponsor Inc",
  "donorEmail": "donations@corporatesponsor.com",
  "message": "Corporate donation to support your annual fundraising goals."
}
```

## 6. Test Scenarios

### Scenario 1: Complete Workflow Test
1. Create a new cause with clean water theme
2. Create team members associated with the cause
3. Create events related to the cause
4. Add gallery items showcasing the work
5. Record donations for the cause
6. Update all entities with additional information
7. Test all GET endpoints to verify data integrity

### Scenario 2: Error Handling Test
1. Try to GET non-existent resources (should return 404)
2. Try to POST with missing required fields
3. Try to POST with invalid data types
4. Try to UPDATE non-existent resources
5. Try to DELETE non-existent resources

### Scenario 3: Data Validation Test
1. Test email validation in teams (invalid email formats)
2. Test URL validation for social media links
3. Test required field validation across all entities
4. Test data type validation (strings, numbers, dates)

## 7. Quick Test Commands for Each Endpoint

### GET Requests (No body needed)
- `GET /causes` - List all causes
- `GET /causes/:id` - Get specific cause
- `GET /teams` - List all team members
- `GET /teams/:id` - Get specific team member
- `GET /events` - List all events
- `GET /events/:id` - Get specific event
- `GET /gallery` - List all gallery items
- `GET /gallery/:id` - Get specific gallery item
- `GET /donations` - List all donations

### DELETE Requests (No body needed)
- `DELETE /causes/:id`
- `DELETE /teams/:id`
- `DELETE /events/:id`
- `DELETE /gallery/:id`

Remember to replace `:id` with actual IDs returned from your POST/GET requests when testing!
