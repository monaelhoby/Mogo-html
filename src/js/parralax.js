window.onload = function () {
    var wrapper = document.querySelectorAll('.carousel-item'),
        layerOne = document.querySelectorAll('.carousel-caption');
    // layerTwo = document.querySelector('.layer-2');



    for (let index = 0; index < wrapper.length; index++) {
        // console.log(wrapper[index]);
if(layerOne[index]&&wrapper[index])
        addListener(wrapper[index], layerOne[index]);

    }

    function addListener(element, layerOne) {
        if(layerOne)
        element.addEventListener('mousemove', function (e) {
            var pageX = e.clientX,
                pageY = e.clientY;
            layerOne.style.webkitTransform = 'translateX(' + pageX / 150 + '%) translateY(' + pageY / 150 + '%)';
            layerOne.style.transform = 'translateX(' + pageX / 150 + '%) translateY(' + pageY / 150 + '%)';
            // layerTwo.style.webkitTransform = 'translateX(' + pageX / 1150 + '%) translateY(' + pageY / 2150 + '%)';
            // layerTwo.style.transform = 'translateX(' + pageX / 1150 + '%) translateY(' + pageY / 2150 + '%)';
            // element.style = 'background-position:' + pageX / 200 + 'px center';
        });
    }
}


