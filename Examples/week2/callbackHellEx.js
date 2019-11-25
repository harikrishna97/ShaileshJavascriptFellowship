/*
CallBack Hell Example:
The code for the three simple tasks would look something like this:
Each function gets an argument which is another function that is called with a parameter that is the response of the previous action.
*/

const verifyUser = function(username, password, callback){
    dataBase.verifyUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error)
        }else{
            dataBase.getRoles(username, (error, roles) => {
                if (error){
                    callback(error)
                }else {
                    dataBase.logAccess(username, (error) => {
                        if (error){
                            callback(error);
                        }else{
                            callback(null, userInfo, roles);
                        }
                    })
                }
            })
        }
    })
 };

/*
This example gets even more complicated once you realize that a database.
getRoles is another function that has nested callbacks.

*/
const getRoles = function (username, callback){
   database.connect((connection) => {
       connection.query('get roles sql', (result) => {
           callback(null, result);
       })
   });
};