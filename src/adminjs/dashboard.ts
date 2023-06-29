import AdminJS, { PageHandler } from "adminjs";
import { Category, Product, User } from "../models";

export const dashboardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, context) => {
    const products = await Product.count();
    const categories = await Category.count();
    const standardUsers = await User.count({ where: { role: "user" } });
    res.json({
      Produtos: products,
      Categorias: categories,
      Usuários: standardUsers,
    });
  },
};
