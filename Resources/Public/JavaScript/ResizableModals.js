define(['TYPO3/CMS/Backend/Modal', 'jquery-ui/draggable', 'jquery-ui/resizable'], function (Modal) {
    var originalAdvanced = Modal.advanced;
    Modal.advanced = function (configuration) {
        return originalAdvanced.apply(Modal, [configuration])
            .find('.modal-content')
            .resizable({
                handles: 'n, e, s, w, ne, sw, se, nw',
            })
            .draggable({
                handle: '.modal-header'
            })
    }
});
