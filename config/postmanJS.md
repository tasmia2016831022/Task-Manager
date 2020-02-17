## For Dev environment 
 * Follow 'Task Manager/Task Manager Api (dev).postman_environment.json'
 
 * Request Collection:
   -  Create User
      -- Add this to test :
         ```bash
         if(pm.response.code === 201){pm.environment.set('authToken',pm.response.json().token)}
         ```
      -- Set Authorization : no auth
   - Login User 
     -- Add this to test:
     ```bash
     if(pm.response.code === 200){ pm.environment.set('authToken',pm.response.json().token)}
     ```
   - Read Profile (mine)
    -- Set Authorization: Bearer Token
    
    Set rest of the request (Authorization): Inherit Auth from Parent