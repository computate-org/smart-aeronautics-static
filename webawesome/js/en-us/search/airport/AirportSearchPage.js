Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAirport')?.addEventListener('change', (event) => {
    facetRangeChange('Airport', event.target.value);
  });

  document.querySelector('#pageSelectSortAirport_pk')?.addEventListener('change', (event) => {
    sort('Airport', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'pk', true);
  });
  document.querySelector('#pageStatsAirport_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'pk', false);
  });

  document.querySelector('#pageSelectSortAirport_created')?.addEventListener('change', (event) => {
    sort('Airport', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'created', true);
  });
  document.querySelector('#pageStatsAirport_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'created', false);
  });

  document.querySelector('#pageSelectSortAirport_modified')?.addEventListener('change', (event) => {
    sort('Airport', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'modified', true);
  });
  document.querySelector('#pageStatsAirport_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'modified', false);
  });

  document.querySelector('#pageSelectSortAirport_archived')?.addEventListener('change', (event) => {
    sort('Airport', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'archived', true);
  });
  document.querySelector('#pageStatsAirport_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'archived', false);
  });

  document.querySelector('#pageSelectSortAirport_name')?.addEventListener('change', (event) => {
    sort('Airport', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'name', true);
  });
  document.querySelector('#pageStatsAirport_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'name', false);
  });

  document.querySelector('#pageSelectSortAirport_description')?.addEventListener('change', (event) => {
    sort('Airport', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'description', true);
  });
  document.querySelector('#pageStatsAirport_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'description', false);
  });

  document.querySelector('#pageSelectSortAirport_location')?.addEventListener('change', (event) => {
    sort('Airport', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'location', true);
  });
  document.querySelector('#pageStatsAirport_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'location', false);
  });

  document.querySelector('#pageSelectSortAirport_color')?.addEventListener('change', (event) => {
    sort('Airport', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'color', true);
  });
  document.querySelector('#pageStatsAirport_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'color', false);
  });

  document.querySelector('#pageSelectSortAirport_areaServed')?.addEventListener('change', (event) => {
    sort('Airport', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'areaServed', true);
  });
  document.querySelector('#pageStatsAirport_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortAirport_id')?.addEventListener('change', (event) => {
    sort('Airport', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'id', true);
  });
  document.querySelector('#pageStatsAirport_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'id', false);
  });

  document.querySelector('#pageSelectSortAirport_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Airport', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsAirport_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortAirport_ngsildPath')?.addEventListener('change', (event) => {
    sort('Airport', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsAirport_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortAirport_ngsildContext')?.addEventListener('change', (event) => {
    sort('Airport', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsAirport_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortAirport_ngsildData')?.addEventListener('change', (event) => {
    sort('Airport', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'ngsildData', true);
  });
  document.querySelector('#pageStatsAirport_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortAirport_address')?.addEventListener('change', (event) => {
    sort('Airport', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'address', true);
  });
  document.querySelector('#pageStatsAirport_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'address', false);
  });

  document.querySelector('#pageSelectSortAirport_alternateName')?.addEventListener('change', (event) => {
    sort('Airport', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'alternateName', true);
  });
  document.querySelector('#pageStatsAirport_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortAirport_codeIATA')?.addEventListener('change', (event) => {
    sort('Airport', 'codeIATA', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_codeIATA')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'codeIATA', true);
  });
  document.querySelector('#pageStatsAirport_codeIATA')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'codeIATA', false);
  });

  document.querySelector('#pageSelectSortAirport_codeICAO')?.addEventListener('change', (event) => {
    sort('Airport', 'codeICAO', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_codeICAO')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'codeICAO', true);
  });
  document.querySelector('#pageStatsAirport_codeICAO')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'codeICAO', false);
  });

  document.querySelector('#pageSelectSortAirport_dataProvider')?.addEventListener('change', (event) => {
    sort('Airport', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'dataProvider', true);
  });
  document.querySelector('#pageStatsAirport_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortAirport_dateCreated')?.addEventListener('change', (event) => {
    sort('Airport', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'dateCreated', true);
  });
  document.querySelector('#pageStatsAirport_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortAirport_dateModified')?.addEventListener('change', (event) => {
    sort('Airport', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'dateModified', true);
  });
  document.querySelector('#pageStatsAirport_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortAirport_owner')?.addEventListener('change', (event) => {
    sort('Airport', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'owner', true);
  });
  document.querySelector('#pageStatsAirport_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'owner', false);
  });

  document.querySelector('#pageSelectSortAirport_seeAlso')?.addEventListener('change', (event) => {
    sort('Airport', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'seeAlso', true);
  });
  document.querySelector('#pageStatsAirport_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortAirport_source')?.addEventListener('change', (event) => {
    sort('Airport', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'source', true);
  });
  document.querySelector('#pageStatsAirport_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'source', false);
  });

  document.querySelector('#pageSelectSortAirport_entityShortId')?.addEventListener('change', (event) => {
    sort('Airport', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'entityShortId', true);
  });
  document.querySelector('#pageStatsAirport_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortAirport_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Airport', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAirport_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAirport_classSimpleName')?.addEventListener('change', (event) => {
    sort('Airport', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsAirport_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortAirport_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Airport', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsAirport_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortAirport_sessionId')?.addEventListener('change', (event) => {
    sort('Airport', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'sessionId', true);
  });
  document.querySelector('#pageStatsAirport_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortAirport_userKey')?.addEventListener('change', (event) => {
    sort('Airport', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'userKey', true);
  });
  document.querySelector('#pageStatsAirport_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'userKey', false);
  });

  document.querySelector('#pageSelectSortAirport_saves')?.addEventListener('change', (event) => {
    sort('Airport', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'saves', true);
  });
  document.querySelector('#pageStatsAirport_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'saves', false);
  });

  document.querySelector('#pageSelectSortAirport_objectTitle')?.addEventListener('change', (event) => {
    sort('Airport', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAirport_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAirport_displayPage')?.addEventListener('change', (event) => {
    sort('Airport', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'displayPage', true);
  });
  document.querySelector('#pageStatsAirport_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAirport_editPage')?.addEventListener('change', (event) => {
    sort('Airport', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'editPage', true);
  });
  document.querySelector('#pageStatsAirport_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAirport_userPage')?.addEventListener('change', (event) => {
    sort('Airport', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'userPage', true);
  });
  document.querySelector('#pageStatsAirport_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'userPage', false);
  });

  document.querySelector('#pageSelectSortAirport_download')?.addEventListener('change', (event) => {
    sort('Airport', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'download', true);
  });
  document.querySelector('#pageStatsAirport_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'download', false);
  });

  document.querySelector('#pageSelectSortAirport_objectSuggest')?.addEventListener('change', (event) => {
    sort('Airport', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsAirport_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortAirport_objectText')?.addEventListener('change', (event) => {
    sort('Airport', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'objectText', true);
  });
  document.querySelector('#pageStatsAirport_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'objectText', false);
  });

  document.querySelector('#pageSelectSortAirport_solrId')?.addEventListener('change', (event) => {
    sort('Airport', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'solrId', true);
  });
  document.querySelector('#pageStatsAirport_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'solrId', false);
  });

  document.querySelector('#pageSelectSortAirport_areaServedColors')?.addEventListener('change', (event) => {
    sort('Airport', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsAirport_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortAirport_areaServedTitles')?.addEventListener('change', (event) => {
    sort('Airport', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirport_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airport', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsAirport_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airport', 'areaServedTitles', false);
  });
          document.querySelector('#fqAirport_created')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_created')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_created')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_archived')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_name')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_name')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_name')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_description')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_description')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_description')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_location')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_location')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_location')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_color')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_color')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_color')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_areaServed')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_areaServed')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_areaServed')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_id')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_id')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_id')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_address')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_address')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_address')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_alternateName')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_alternateName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_alternateName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_codeIATA')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_codeIATA')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_codeIATA')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_codeIATA')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_codeIATA')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_codeIATA')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_codeICAO')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_codeICAO')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_codeICAO')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_codeICAO')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_codeICAO')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_codeICAO')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_dataProvider')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_dataProvider')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_dateCreated')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_dateCreated')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_dateModified')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_dateModified')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_dateModified')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_owner')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_owner')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_owner')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_seeAlso')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_seeAlso')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_source')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_source')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_source')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_source')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_source')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_entityShortId')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_displayPage')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_editPage')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_userPage')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
          document.querySelector('#fqAirport_download')?.addEventListener('change', (event) => {
            fqChange('Airport', event.currentTarget, facetChangeAirportSuccess, facetChangeAirportError);
          });
          document.querySelector('#buttonFacetAirport_download')?.addEventListener('click', (event) => {
            facetFieldChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirport_download')?.addEventListener('change', (event) => {
            facetPivotChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirport_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirport_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airport', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirport_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airport', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteAirport')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteAirport(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterAirport')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAirport(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
