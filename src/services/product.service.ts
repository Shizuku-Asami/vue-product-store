import { Product } from "@/models/product";
import axios from "axios";
import { AxiosResponse } from "axios";

const API_URL = "products/";

export const ProductService = {
  retrieveProduct(id: number): Promise<AxiosResponse<any, any>> {
    return axios.get<Product>(
      process.env.VUE_APP_BASE_URL + API_URL + `${id}/`
    );
  },
  listProducts(): Promise<AxiosResponse<any, any>> {
    return axios.get<Product[]>(process.env.VUE_APP_BASE_URL + API_URL);
  },
  createProduct(product: Product): Promise<AxiosResponse<any, any>> {
    return axios.post<Product>(process.env.VUE_APP_BASE_URL + API_URL, product);
  },
  updateProduct(
    id: number,
    product: Product
  ): Promise<AxiosResponse<any, any>> {
    return axios.put<Product>(
      process.env.VUE_APP_BASE_URL + API_URL + `${id}/`,
      product
    );
  },
  partialUpdateProduct(
    id: number,
    product: Product
  ): Promise<AxiosResponse<any, any>> {
    return axios.patch<Product>(
      process.env.VUE_APP_BASE_URL + API_URL + `${id}/`,
      product
    );
  },
  deleteProduct(id: number): Promise<AxiosResponse<any, any>> {
    return axios.delete<{ msg: string }>(
      process.env.VUE_APP_BASE_URL + API_URL + `${id}/`
    );
  },
};
