var model=require('../model/greetingModel');
class Service {
    registerGreeting(body, callback) {
        try {
            model.register(body, (err, data) => {
                if (err) {
                    callback(err)
                } else {
                    console.log("service", data);
                    callback(null, data)
                }
            })
        } catch (err) {
            console.log("err at register service", err)
        }
    }
}
module.exports=new Service();