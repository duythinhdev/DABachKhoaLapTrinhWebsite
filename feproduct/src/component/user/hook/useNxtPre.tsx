export default function useNxtPre(container: any | string,next:any | string,pre:any | string) {
    function nextAndPre() {
        let productContainer = document.querySelectorAll(container) as any | NodeListOf<Element>;
        console.log("productContainer",productContainer);
        let nxtBtns = document.querySelectorAll(next) as any | NodeListOf<Element>;
        let preBtns = document.querySelectorAll(pre) as any | NodeListOf<Element>;
        const productContainers:Array<any> = []; 
        productContainers.push(...productContainer);
        const nxtBtn:Array<any> = [];
        const preBtn:Array<any> = [];
        nxtBtn.push(...nxtBtns);
        preBtn.push(...preBtns);
        productContainers.forEach((item: any, i:number) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;
    
            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
                console.log("item.scrollLeft", item.scrollLeft);
    
            })
    
            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
                console.log("item.scrollLeft", item.scrollLeft);
            })
        })
    }
    return { nextAndPre }
}

