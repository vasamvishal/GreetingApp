const service = require('../service/service');
let responseResult = {};
class Controller {

    registerGreetings(req, res) {
        service.registerGreeting(req.body, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "posted messages";
                responseResult.result = result;
                return res.status(200).send(responseResult);}
        })
    }

    getAllregisteredDetails(req, res) {
        service.getAllRegisteredGreetingDetails(req, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else{
                responseResult.sucess = true;
                responseResult.message = "got all messages";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }

    getByIdAllDetails(req, res) {
        service.getByIdAllDetails(req, (err, result) => {
            if (err){
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "got all messages by id";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }

    updateGreetings(req, res) {
        service.updateGreetings(req, (err, result) => {
            if (err){
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else{
                responseResult.sucess = true;
                responseResult.message = "updated messages";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }

    deleteByIdDetails(req, res) {
        service.getDeleteById(req, (err, result) => {
            if (err){
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else{
                responseResult.sucess = true;
                responseResult.message = "deleted all messages";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }
}

module.exports = new Controller();