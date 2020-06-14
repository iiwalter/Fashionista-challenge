const url = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

export const request = async () => {
    const response = await fetch(url).then(res => res.json())
    return response;
}
