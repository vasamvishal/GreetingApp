const service=require('../service/service');
class Controller {

    greetings(req, res){

        service.registerGreeting(req.body, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })
    }
}
module.exports=new Controller();