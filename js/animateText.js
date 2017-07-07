app.directive('animateText', function ($interval) {
    function link(scope, element, attrs) {
        var fullTextLength = scope.inputText.length;
        var fullText = scope.inputText;
        var currentLength = 0;

        function animateText() {

            $interval(function () {
                    if (currentLength <= fullTextLength) {
                        scope.inputText = fullText.substr(0, currentLength);
                        currentLength++;
                    } else {
                        $interval.cancel();
                    }

                },
                70);
        };
        animateText();
    };

    return {

        link: link,
        scope: {
            inputText: '@'
        },
        template: '<span id="logotext" data-ng-bind="inputText" ></span><span class="typed-cursor">|</span>'
    };
});