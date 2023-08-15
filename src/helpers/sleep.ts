//Ayuda a dormir la aplicación por los segundos que se mande
//para hacer que tarde apropósito la petición

export const sleep = ( seconds: number = 1 ):Promise<boolean> => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
}