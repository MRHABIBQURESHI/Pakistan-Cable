
baseUrl/api/auth/signup : {
    {
        "firstName":"Habib",
        "lastName":"Qureshi",
        "designation":"Sales person",
        "roleId" : "3",  // 1 = Admin , 2 = Manager , 3 = Sales Representative
        "email":"habib232@nodemail.com",
        "password":"Habib@123" 
      },
      {
        "firstName":"Habib",
        "lastName":"Qureshi",
        "designation":"Sales person",
        "roleId" : "3", 
        "email":"habib232@nodemail.com",
        "password":"Habib@123" 
      }
}
// Response
{
    "message": "Success",
    "data": {
      "user": {
        "firstName": "Habib",
        "lastName": "Qureshi",
        "designation": "Sales person",
        "email": "habib232@nodemail.com",
        "password": "$2b$10$daXUUao.q.cCwR2zDivF7uPSDc3hIPTnBaniWyk9Rk1gaKDy33QU6",
        "verificationCode": "27046",
        "roleId": 3,
        "image": null,
        "userName": null,
        "id": 131,
        "status": "Active",
        "createdAt": "2025-02-12T09:31:33.442Z",
        "updatedAt": "2025-02-12T09:31:33.442Z",
        "isVerified": false,
        "isPassCodeValid": false,
        "isActive": true,
        "role": "Sales Representative"
      },
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzMSIsInJvbGUiOiJTYWxlcyBSZXByZXNlbnRhdGl2ZSIsImlhdCI6MTczOTM1MjY5NCwiZXhwIjoxNzM5NDM5MDk0fQ.FDgYL-zH1tq-XHsQKB9xQZ0o3olpotCsWCz0Ym9FSh4"
    }
  }

//   Response Login 
{
    "message": "Success",
    "data": {
      "user": {
        "id": 131,
        "status": "Active",
        "userName": null,
        "firstName": "Habib",
        "lastName": "Qureshi",
        "email": "habib232@nodemail.com",
        "isVerified": false,
        "designation": "Sales person",
        "image": null,
        "isActive": true,
        "roleId": 3,
        "role": "Sales Representative"
      },
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzMSIsInJvbGUiOiJTYWxlcyBSZXByZXNlbnRhdGl2ZSIsImlhdCI6MTczOTM1Mzc4NiwiZXhwIjoxNzM5NDQwMTg2fQ.MwbWhRr0gb0WoGe9sY-0HOhY5qf1DTPznA_hK7tzN9s"
    }
  }

//   Token Last
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzMSIsInJvbGUiOiJTYWxlcyBSZXByZXNlbnRhdGl2ZSIsImlhdCI6MTczOTM1NDMzNywiZXhwIjoxNzM5NDQwNzM3fQ.2DyW3t7rK-qYgaZn22ZaNL7N4pu0-eBwY-zNx7M6q6U



Admin Signup = 
{
  "message": "Success",
  "data": {
    "user": {
      "firstName": "Habib",
      "lastName": "Qureshi",
      "designation": "Sales person",
      "email": "habib12@admin.com",
      "password": "$2b$10$IIDtuSO9eda.3DAyEedYlOqUey.YZm9g3syaGPKiqixMnvfA3oF.O",
      "verificationCode": "95684",
      "roleId": 1,
      "image": null,
      "userName": null,
      "id": 136,
      "status": "Active",
      "createdAt": "2025-02-12T10:31:06.646Z",
      "updatedAt": "2025-02-12T10:31:06.646Z",
      "isVerified": false,
      "isPassCodeValid": false,
      "isActive": true,
      "role": "Admin"
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzNiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczOTM1NjI2NywiZXhwIjoxNzM5NDQyNjY3fQ._p0FSj_gFLRv47fU73SxLc8fnWkbnUSgRtBElG6u8bo"
  }
}

Admni Login

{
  "message": "Success",
  "data": {
    "user": {
      "id": 136,
      "status": "Active",
      "userName": null,
      "firstName": "Habib",
      "lastName": "Qureshi",
      "email": "habib12@admin.com",
      "isVerified": false,
      "designation": "Sales person",
      "image": null,
      "isActive": true,
      "roleId": 1,
      "role": "Admin"
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzNiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczOTM1NjM5MiwiZXhwIjoxNzM5NDQyNzkyfQ.JFoT2SXhXEEQGukrjFwCdtJA7M404QJmMzQVrQyqy0g"
  }
}




    "email": "habib23@email.com",
    "password": "Habib123@Admin"