const useApiResult = (isLoading: boolean, data: any, error: any) => {

    var result: any = { data: [], error: false };

    if (error) {
        result = { data: [], error: true };
        return result;
    }

    if (isLoading) {
        return result;
    }

    if (data.status === 'true') {
        result = { data, error: false };
        return result;
    }

    if (data.status === 'false') {
        result = { data: [], error: true };
        return result;
    }



}

export default useApiResult