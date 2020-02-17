## For Dev environment 
 * Follow 'Task Manager/Task Manager Api (dev).postman_environment.json'
 
 * Request Collection:
   -  Create User
      -- Add this to test :
         ```bash
         if(pm.response.code === 201){pm.environment.set('authToken',pm.response.json().token)}
         ```