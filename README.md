🧠 ESS Self-Service Portal

This is a full-stack React + Node.js application designed to interface with Microsoft Business Central (OData + SOAP APIs), PostgreSQL/MySQL for persistence, and Bootstrap (Tailwind optional later).

🛠️ Tech Stack

Frontend: React + Vite + Bootstrap (Tailwind optional) + ShadCN UI (optional)

Backend: Node.js + Express

DB: PostgreSQL or MySQL (configurable)

Integration: Microsoft Business Central OData & SOAP

Mail: Mailpit (for development email testing)

⚙️ Project Setup

1. Clone the Repository

git clone https://github.com/your-org/ess-app.git
cd ess-app

2. Install Dependencies

Server (Node.js backend)

cd server
npm install

Client (React frontend)

cd ../client
npm install

3. Setup Environment Variables

Copy the provided .env.example file and fill in your values:

cp server/.env.example server/.env

4. Setup Database

Ensure PostgreSQL or MySQL is running locally or remotely.
Then, back in the server directory:

npx sequelize-cli db:migrate

Make sure your .env is pointing to the right DB (Postgres or MySQL)

5. Start Development Servers

Backend

cd server
npm run dev

Frontend

cd ../client
npm run dev

Frontend: http://localhost:5173

Backend: http://localhost:5000

📱 API Integration

The backend connects to Microsoft Business Central using:

OData JSON (/api/bc/users, /api/bc/employees...)

SOAP Function Calls (/api/bc/soap with methods like FnLeavePlannerHeader)

✉️ Email (via Mailpit)

To test email locally:

Download & run Mailpit: https://github.com/axllent/mailpit

Emails will be delivered to: http://localhost:8025

✅ .env.example

# Common

BC_HOST=your-bc-host
BC_INSTANCE=your-instance
BC_COMPANY=your-company
BC_USERNAME=your-username
BC_PASSWORD=your-password

# SOAP

BC_SOAP_PORT=7047
BC_SOAP_TYPE=Codeunit
BC_SOAP_OBJECT=your-codeunit

# ODATA

BC_ODATA_PORT=7048

# Which DB to use: postgres or mysql

DB_CLIENT=postgres

# PostgreSQL settings

PG_HOST=localhost
PG_PORT=5432
PG_NAME=your_db
PG_USER=your_user
PG_PASSWORD=your_password

# MySQL settings

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_NAME=your_db
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password

# Authentication type to use (basic or ntlm)

AUTH_TYPE=basic

# Sequelize Logging

SEQ_LOGGING=false

# Mailpit SMTP Settings

MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USER=
MAIL_PASSWORD=
MAIL_FROM_NAME="ESS System"
MAIL_FROM_EMAIL=no-reply@ess.local

📦 Project Structure (Simplified)

ess-app/
├── client/ # React + Bootstrap (Tailwind optional later)
├── server/ # Express + Sequelize + SOAP/OData services
│ ├── routes/
│ ├── services/
│ ├── models/
│ ├── config/
│ └── .env
└── README.md

👥 Contributors

Enock Maeba

[Add more contributors here]
