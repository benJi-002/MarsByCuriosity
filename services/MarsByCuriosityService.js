import { useHttp } from '../hooks/http.hook';

const useService = () => {

    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
            _apiKey = `KbjAlPYChQwCYLJGybII90fGU6ckeu6qQGk4MqyQ`;
    


    const getPhotos = async (date, camera) => {

        const res = await request(`${_apiBase}?earth_date=${date}&camera=${camera}&page=1&api_key=${_apiKey}`, 
        'GET', null, 
            {
                'Content-Type': 'application/json', 
            });


        return res.photos.map(_transformData)
    }

    const _transformData = (photo) => {

        return {
            id: photo.id,
            img: photo.img_src
        }
    }

    return {getPhotos, loading, error, clearError}
}

export default useService;