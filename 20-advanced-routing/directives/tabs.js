angular
    .module('booksCart')
    .directive('tabs', function() {
        return {
            scope: true,
            compile: function(element) {
                var tabs = element.find('tab');
                var totalHtml = '<div>';

                totalHtml += '  <style type="text/css">' +
                    '.tab-header span{' +
                    'background-color: lightgray;' +
                    'padding:5px;' +
                    '}' +
                    '.tab-header span.active{' +
                    'background-color: navy;' +
                    'color: white;' +
                    'padding:5px;' +
                    '}' +
                    '.tab {' +
                    'padding:20px;' +
                    'border: 2px solid navy;' +
                    'margin-top: 2px;' +
                    '}' +
                    '</style>';

                //tab header
                var tabHeaderHtml = '<div class="tab-header">';
                for (var i = 0; i < tabs.length; i++) {
                    var tab = $(tabs[i]);
                    var tabNum = i + 1;
                    tabHeaderHtml += '<span ng-click="currentTab=' + tabNum + '" ng-class="{active: currentTab==' + tabNum + '}">' + tab.attr('title') + '</span>'
                }
                tabHeaderHtml += '</div>'

                //tabs html
                var tabsHtml = '';
                for (var i = 0; i < tabs.length; i++) {
                    var tab = $(tabs[i]);
                    var tabNum = i + 1;
                    tabsHtml += '<div class="tab" ng-show="currentTab==' + tabNum + '">' +
                        tab.html() +
                        '</div>';
                }


                totalHtml += tabHeaderHtml + tabsHtml + '</div>';

                element.html(totalHtml);

                var link = function(scope, element, attributes) {
                    scope.currentTab = 1;
                }
                return link;
            }
        }

    })
