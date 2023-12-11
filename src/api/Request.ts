export async function my_request(duongDan: string) {
    const response = await fetch(duongDan)
    if(!response.ok){
        throw new Error(`Khong the ket noi den ${duongDan}`);
    }
    return response.json();
}