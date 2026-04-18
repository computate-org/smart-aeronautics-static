Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeMapModel')?.addEventListener('change', (event) => {
    facetRangeChange('MapModel', event.target.value);
  });

  document.querySelector('#pageSelectSortMapModel_pk')?.addEventListener('change', (event) => {
    sort('MapModel', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'pk', true);
  });
  document.querySelector('#pageStatsMapModel_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'pk', false);
  });

  document.querySelector('#pageSelectSortMapModel_created')?.addEventListener('change', (event) => {
    sort('MapModel', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'created', true);
  });
  document.querySelector('#pageStatsMapModel_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'created', false);
  });

  document.querySelector('#pageSelectSortMapModel_modified')?.addEventListener('change', (event) => {
    sort('MapModel', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'modified', true);
  });
  document.querySelector('#pageStatsMapModel_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'modified', false);
  });

  document.querySelector('#pageSelectSortMapModel_archived')?.addEventListener('change', (event) => {
    sort('MapModel', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'archived', true);
  });
  document.querySelector('#pageStatsMapModel_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'archived', false);
  });

  document.querySelector('#pageSelectSortMapModel_name')?.addEventListener('change', (event) => {
    sort('MapModel', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'name', true);
  });
  document.querySelector('#pageStatsMapModel_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'name', false);
  });

  document.querySelector('#pageSelectSortMapModel_description')?.addEventListener('change', (event) => {
    sort('MapModel', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'description', true);
  });
  document.querySelector('#pageStatsMapModel_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'description', false);
  });

  document.querySelector('#pageSelectSortMapModel_location')?.addEventListener('change', (event) => {
    sort('MapModel', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'location', true);
  });
  document.querySelector('#pageStatsMapModel_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'location', false);
  });

  document.querySelector('#pageSelectSortMapModel_color')?.addEventListener('change', (event) => {
    sort('MapModel', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'color', true);
  });
  document.querySelector('#pageStatsMapModel_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'color', false);
  });

  document.querySelector('#pageSelectSortMapModel_id')?.addEventListener('change', (event) => {
    sort('MapModel', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'id', true);
  });
  document.querySelector('#pageStatsMapModel_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'id', false);
  });

  document.querySelector('#pageSelectSortMapModel_ngsildTenant')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsMapModel_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortMapModel_ngsildPath')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsMapModel_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortMapModel_ngsildContext')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsMapModel_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortMapModel_ngsildData')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'ngsildData', true);
  });
  document.querySelector('#pageStatsMapModel_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortMapModel_classCanonicalName')?.addEventListener('change', (event) => {
    sort('MapModel', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsMapModel_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortMapModel_classSimpleName')?.addEventListener('change', (event) => {
    sort('MapModel', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsMapModel_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortMapModel_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('MapModel', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsMapModel_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortMapModel_sessionId')?.addEventListener('change', (event) => {
    sort('MapModel', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'sessionId', true);
  });
  document.querySelector('#pageStatsMapModel_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortMapModel_userKey')?.addEventListener('change', (event) => {
    sort('MapModel', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'userKey', true);
  });
  document.querySelector('#pageStatsMapModel_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'userKey', false);
  });

  document.querySelector('#pageSelectSortMapModel_saves')?.addEventListener('change', (event) => {
    sort('MapModel', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'saves', true);
  });
  document.querySelector('#pageStatsMapModel_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'saves', false);
  });

  document.querySelector('#pageSelectSortMapModel_objectTitle')?.addEventListener('change', (event) => {
    sort('MapModel', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'objectTitle', true);
  });
  document.querySelector('#pageStatsMapModel_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortMapModel_displayPage')?.addEventListener('change', (event) => {
    sort('MapModel', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'displayPage', true);
  });
  document.querySelector('#pageStatsMapModel_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortMapModel_editPage')?.addEventListener('change', (event) => {
    sort('MapModel', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'editPage', true);
  });
  document.querySelector('#pageStatsMapModel_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'editPage', false);
  });

  document.querySelector('#pageSelectSortMapModel_userPage')?.addEventListener('change', (event) => {
    sort('MapModel', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'userPage', true);
  });
  document.querySelector('#pageStatsMapModel_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'userPage', false);
  });

  document.querySelector('#pageSelectSortMapModel_download')?.addEventListener('change', (event) => {
    sort('MapModel', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'download', true);
  });
  document.querySelector('#pageStatsMapModel_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'download', false);
  });

  document.querySelector('#pageSelectSortMapModel_objectSuggest')?.addEventListener('change', (event) => {
    sort('MapModel', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsMapModel_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortMapModel_objectText')?.addEventListener('change', (event) => {
    sort('MapModel', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'objectText', true);
  });
  document.querySelector('#pageStatsMapModel_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'objectText', false);
  });

  document.querySelector('#pageSelectSortMapModel_solrId')?.addEventListener('change', (event) => {
    sort('MapModel', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'solrId', true);
  });
  document.querySelector('#pageStatsMapModel_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'solrId', false);
  });

  document.querySelector('#pageSelectSortMapModel_entityShortId')?.addEventListener('change', (event) => {
    sort('MapModel', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsMapModel_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('MapModel', 'entityShortId', true);
  });
  document.querySelector('#pageStatsMapModel_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('MapModel', 'entityShortId', false);
  });
});
