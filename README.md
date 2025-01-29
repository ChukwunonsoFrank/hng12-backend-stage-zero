# HNG12 Backend Task(Stage 0)

This is a public facing API that retrieves basic user information for a participant of the HNG12 internship program.

## Getting Started

#### Clone the repo from Github:

```bash
git clone https://github.com/ChukwunonsoFrank/hng12-backend-stage-zero.git
cd hng12-backend-stage-zero
```

#### Setup environment variables:

```bash
cp .env.example .env
```

#### Install dependencies:

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

## API Documentation

The API will be accessible at the following endpoint:

#### Request format
```bash
curl http://localhost:3333/api/user
```

#### Response format
```json
{
  "email": "example@gmail.com",
  "current_datetime": "2025-01-29T20:32:31.894Z",
  "github_url": "https://github.com/example-repo/hng12-backend-stage-zero"
}
```

## Example Usage

As shown below, we are making a GET request with cURL with jq(for pretty printing JSON responses) but you can make use of any API testing tool available to you.

#### Sample GET request
![Sample GET request](https://github.com/ChukwunonsoFrank/hng12-backend-stage-zero/blob/main/assets/example-get-request.png)

## Backlinks
[Hire NodeJS Developers](https://hng.tech/hire/nodejs-developers)