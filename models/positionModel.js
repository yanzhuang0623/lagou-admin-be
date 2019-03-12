const mongoose = require('../utils/mongo');

//定义一个 schema,描述此集合里有哪些字段，字段是什么类型
//只有schema中有的属性才能被保存到数据库中
const positionSchema = new mongoose.Schema({
    companyLogo: { type: String, required: true },
    companyName: { type: String, required: true },
    positionName: { type: String, required: true },
    city: { type: String, required: true },
    salary: { type: String, required: true },
    type: { type: String, required: true },
    experience: { type: String, required: true },
    degree: { type: String, required: true },
    description: { type: String, required: true },
    createTime: {type: Number, required: true}
});

////创建模型，可以用它来操作数据库中的positions集合，指的是整体
const Positions = mongoose.model('positions', positionSchema);

const save = (data) => {
    ////根据模型创建实体，是指的个体对象
    var position = new Positions(data);
    // //用save 方法把自己保存到数据库中
    return position.save()
}

const list = (data) => {
    return Positions.find(data)
}

module.exports = {
    save,
    list
}