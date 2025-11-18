const Menu = require("../model/user.model");

const GetMenu = async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
};
const GetMenuById = async (req, res) => {
  const menu = await Menu.findById(req.params.id);
  res.json(menu);
};
const PostMenu = async (req, res) => {
  const menu = new Menu({
    comida: req.body.comida,
    bebida: req.body.bebida,
    postre: req.body.postre,
  });
  menu.save();
  res.json({ menu: menu });
};
const PutMenu = async (req, res) => {
  res.json({ menu: "put Menu" });
};
const DeleteMenu = async (req, res) => {
  const menu = await Menu.findByIdAndDelete(req.params.id);
  await menu.remove();
  res.json({ menu: "delete Menu" });
};

module.exports = {
  GetMenu,
  GetMenuById,
  PostMenu,
  PutMenu,
  DeleteMenu,
};
