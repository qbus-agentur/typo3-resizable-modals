<?php
defined ('TYPO3') || die ('Access denied.');

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/backend.php']['constructPostProcess'][] = \Qbus\ResizableModals\BackendControllerHook::class . '->registerResizableModal';
