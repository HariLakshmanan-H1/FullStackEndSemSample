# GHI Project Setup Guide

This document outlines the complete end-to-end process for setting up the frontend and backend for the GHI full-stack application.

## Initial Setup (One Terminal)

Start by creating the root project folder:


1) mkdir GHI


---

## Two Terminals Workflow

You will need two separate terminal windows for the next steps.

### Frontend Setup (Frontend Terminal)

In your first terminal, follow these steps to set up the React frontend:

2) cd GHI
3) Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
4) npx create-react-app frontend
11) cd frontend
    npm install axios react-hook-form react-router-dom
12) # Open frontend/package.json and change the start script line to:
    # "start": "set PORT=3001 && react-scripts start"
12) # Create necessary files/components in the frontend/src folder (AddOrder.js, etc.)
14) npm start


### Backend Setup (Backend Terminal)

In your second terminal, follow these steps to set up the Node.js backend:


5) cd GHI
6) Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
7) mkdir backend
8) cd backend
9) npm init -y
10) npm install express mongoose cors body-parser
13) node server.js

