import { useFetchProductsQuery } from '../../redux/slice/products'
import useApiResult from "../useApiResult";

const useProducts = () => {

    const { isLoading, data, error } = useFetchProductsQuery('');

    var result = useApiResult(isLoading, data, error);
    return {
        isLoading,
        data: result.data.length === 0 ? [] : result.data.product,
        isError: result.error
    }
}

export default useProducts;