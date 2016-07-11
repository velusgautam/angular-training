booksCart.directive('tabs', function () {
    return {
        compile: function (element) {
            var finalHtml = '';

            //style
            finalHtml += '<style>' +
                '.tab-headers span {' +
                'background-color: lightgray;' +
                'padding: 5px;' +
                'cursor: pointer;' +
                '}' +
                '.tab-headers span.active {' +
                'background-color: orange;' +
                'text-decoration: none;' +
                '}' +
                '.tab {' +
                'border: 2px solid orange;' +
                'margin-top: 5px;' +
                'padding: 10px;' +
                '}' +
                '</style>';

            //header
            var tabHeaderHtml = '<div class="tab-headers">';
            var tabNum = 1;
            $("tab").each(function () {
                var tab = $(this);
                tabHeaderHtml += '<span ng-class="{active: currentTab==' + tabNum + '}" ng-click="currentTab=' + tabNum + '">' + tab.attr('title') + '</span>';
                tabNum++;
            });
            tabHeaderHtml += '</div>';
            finalHtml += tabHeaderHtml;

            //tabs
            var tabsHtml = '';
            var tabNum = 1;
            $('tab').each(function () {
                var tab = $(this);
                tabsHtml += '<div class="tab" ng-show="currentTab==' + tabNum + '">' +
                    tab.html() +
                    '</div>';
                tabNum++;
            });
            finalHtml += tabsHtml;

            element.html(finalHtml);

            function link(scope, element, attributes) {
                scope.currentTab = 1;
            }

            return link;
        }
    }
});