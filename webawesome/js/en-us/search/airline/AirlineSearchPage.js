Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAirline')?.addEventListener('change', (event) => {
    facetRangeChange('Airline', event.target.value);
  });

  document.querySelector('#pageSelectSortAirline_pk')?.addEventListener('change', (event) => {
    sort('Airline', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'pk', true);
  });
  document.querySelector('#pageStatsAirline_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'pk', false);
  });

  document.querySelector('#pageSelectSortAirline_created')?.addEventListener('change', (event) => {
    sort('Airline', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'created', true);
  });
  document.querySelector('#pageStatsAirline_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'created', false);
  });

  document.querySelector('#pageSelectSortAirline_modified')?.addEventListener('change', (event) => {
    sort('Airline', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'modified', true);
  });
  document.querySelector('#pageStatsAirline_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'modified', false);
  });

  document.querySelector('#pageSelectSortAirline_archived')?.addEventListener('change', (event) => {
    sort('Airline', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'archived', true);
  });
  document.querySelector('#pageStatsAirline_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'archived', false);
  });

  document.querySelector('#pageSelectSortAirline_address')?.addEventListener('change', (event) => {
    sort('Airline', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'address', true);
  });
  document.querySelector('#pageStatsAirline_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'address', false);
  });

  document.querySelector('#pageSelectSortAirline_alternateName')?.addEventListener('change', (event) => {
    sort('Airline', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'alternateName', true);
  });
  document.querySelector('#pageStatsAirline_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortAirline_callSign')?.addEventListener('change', (event) => {
    sort('Airline', 'callSign', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_callSign')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'callSign', true);
  });
  document.querySelector('#pageStatsAirline_callSign')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'callSign', false);
  });

  document.querySelector('#pageSelectSortAirline_codeIATA')?.addEventListener('change', (event) => {
    sort('Airline', 'codeIATA', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_codeIATA')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'codeIATA', true);
  });
  document.querySelector('#pageStatsAirline_codeIATA')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'codeIATA', false);
  });

  document.querySelector('#pageSelectSortAirline_codeICAO')?.addEventListener('change', (event) => {
    sort('Airline', 'codeICAO', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_codeICAO')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'codeICAO', true);
  });
  document.querySelector('#pageStatsAirline_codeICAO')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'codeICAO', false);
  });

  document.querySelector('#pageSelectSortAirline_dataProvider')?.addEventListener('change', (event) => {
    sort('Airline', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'dataProvider', true);
  });
  document.querySelector('#pageStatsAirline_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortAirline_dateCreated')?.addEventListener('change', (event) => {
    sort('Airline', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'dateCreated', true);
  });
  document.querySelector('#pageStatsAirline_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortAirline_dateModified')?.addEventListener('change', (event) => {
    sort('Airline', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'dateModified', true);
  });
  document.querySelector('#pageStatsAirline_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortAirline_owner')?.addEventListener('change', (event) => {
    sort('Airline', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'owner', true);
  });
  document.querySelector('#pageStatsAirline_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'owner', false);
  });

  document.querySelector('#pageSelectSortAirline_seeAlso')?.addEventListener('change', (event) => {
    sort('Airline', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'seeAlso', true);
  });
  document.querySelector('#pageStatsAirline_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortAirline_source')?.addEventListener('change', (event) => {
    sort('Airline', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'source', true);
  });
  document.querySelector('#pageStatsAirline_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'source', false);
  });

  document.querySelector('#pageSelectSortAirline_name')?.addEventListener('change', (event) => {
    sort('Airline', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'name', true);
  });
  document.querySelector('#pageStatsAirline_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'name', false);
  });

  document.querySelector('#pageSelectSortAirline_description')?.addEventListener('change', (event) => {
    sort('Airline', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'description', true);
  });
  document.querySelector('#pageStatsAirline_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'description', false);
  });

  document.querySelector('#pageSelectSortAirline_location')?.addEventListener('change', (event) => {
    sort('Airline', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'location', true);
  });
  document.querySelector('#pageStatsAirline_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'location', false);
  });

  document.querySelector('#pageSelectSortAirline_color')?.addEventListener('change', (event) => {
    sort('Airline', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'color', true);
  });
  document.querySelector('#pageStatsAirline_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'color', false);
  });

  document.querySelector('#pageSelectSortAirline_id')?.addEventListener('change', (event) => {
    sort('Airline', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'id', true);
  });
  document.querySelector('#pageStatsAirline_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'id', false);
  });

  document.querySelector('#pageSelectSortAirline_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Airline', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsAirline_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortAirline_ngsildPath')?.addEventListener('change', (event) => {
    sort('Airline', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsAirline_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortAirline_ngsildContext')?.addEventListener('change', (event) => {
    sort('Airline', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsAirline_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortAirline_ngsildData')?.addEventListener('change', (event) => {
    sort('Airline', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'ngsildData', true);
  });
  document.querySelector('#pageStatsAirline_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortAirline_entityShortId')?.addEventListener('change', (event) => {
    sort('Airline', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'entityShortId', true);
  });
  document.querySelector('#pageStatsAirline_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortAirline_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Airline', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAirline_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAirline_classSimpleName')?.addEventListener('change', (event) => {
    sort('Airline', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsAirline_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortAirline_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Airline', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsAirline_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortAirline_sessionId')?.addEventListener('change', (event) => {
    sort('Airline', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'sessionId', true);
  });
  document.querySelector('#pageStatsAirline_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortAirline_userKey')?.addEventListener('change', (event) => {
    sort('Airline', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'userKey', true);
  });
  document.querySelector('#pageStatsAirline_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'userKey', false);
  });

  document.querySelector('#pageSelectSortAirline_saves')?.addEventListener('change', (event) => {
    sort('Airline', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'saves', true);
  });
  document.querySelector('#pageStatsAirline_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'saves', false);
  });

  document.querySelector('#pageSelectSortAirline_objectTitle')?.addEventListener('change', (event) => {
    sort('Airline', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAirline_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAirline_displayPage')?.addEventListener('change', (event) => {
    sort('Airline', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'displayPage', true);
  });
  document.querySelector('#pageStatsAirline_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAirline_editPage')?.addEventListener('change', (event) => {
    sort('Airline', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'editPage', true);
  });
  document.querySelector('#pageStatsAirline_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAirline_userPage')?.addEventListener('change', (event) => {
    sort('Airline', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'userPage', true);
  });
  document.querySelector('#pageStatsAirline_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'userPage', false);
  });

  document.querySelector('#pageSelectSortAirline_download')?.addEventListener('change', (event) => {
    sort('Airline', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'download', true);
  });
  document.querySelector('#pageStatsAirline_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'download', false);
  });

  document.querySelector('#pageSelectSortAirline_objectSuggest')?.addEventListener('change', (event) => {
    sort('Airline', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsAirline_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortAirline_objectText')?.addEventListener('change', (event) => {
    sort('Airline', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAirline_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Airline', 'objectText', true);
  });
  document.querySelector('#pageStatsAirline_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Airline', 'objectText', false);
  });
          document.querySelector('#fqAirline_created')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_created')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_created')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_archived')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_address')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_address')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_address')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_alternateName')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_alternateName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_alternateName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_callSign')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_callSign')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_callSign')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_callSign')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_callSign')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_callSign')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_codeIATA')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_codeIATA')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_codeIATA')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_codeIATA')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_codeIATA')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_codeIATA')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_codeICAO')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_codeICAO')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_codeICAO')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_codeICAO')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_codeICAO')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_codeICAO')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_dataProvider')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_dataProvider')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_dateCreated')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_dateCreated')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_dateModified')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_dateModified')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_dateModified')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_owner')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_owner')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_owner')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_seeAlso')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_seeAlso')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_source')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_source')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_source')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_source')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_source')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_name')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_name')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_name')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_description')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_description')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_description')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_location')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_location')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_location')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_color')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_color')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_color')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_id')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_id')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_id')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_entityShortId')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_displayPage')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_editPage')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_userPage')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
          document.querySelector('#fqAirline_download')?.addEventListener('change', (event) => {
            fqChange('Airline', event.currentTarget, facetChangeAirlineSuccess, facetChangeAirlineError);
          });
          document.querySelector('#buttonFacetAirline_download')?.addEventListener('click', (event) => {
            facetFieldChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAirline_download')?.addEventListener('change', (event) => {
            facetPivotChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAirline_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAirline_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Airline', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAirline_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Airline', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteAirline')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteAirline(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterAirline')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAirline(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
