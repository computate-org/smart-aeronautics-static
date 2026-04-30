Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAircraft')?.addEventListener('change', (event) => {
    facetRangeChange('Aircraft', event.target.value);
  });

  document.querySelector('#pageSelectSortAircraft_pk')?.addEventListener('change', (event) => {
    sort('Aircraft', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'pk', true);
  });
  document.querySelector('#pageStatsAircraft_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'pk', false);
  });

  document.querySelector('#pageSelectSortAircraft_created')?.addEventListener('change', (event) => {
    sort('Aircraft', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'created', true);
  });
  document.querySelector('#pageStatsAircraft_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'created', false);
  });

  document.querySelector('#pageSelectSortAircraft_modified')?.addEventListener('change', (event) => {
    sort('Aircraft', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'modified', true);
  });
  document.querySelector('#pageStatsAircraft_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'modified', false);
  });

  document.querySelector('#pageSelectSortAircraft_archived')?.addEventListener('change', (event) => {
    sort('Aircraft', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'archived', true);
  });
  document.querySelector('#pageStatsAircraft_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'archived', false);
  });

  document.querySelector('#pageSelectSortAircraft_timeZone')?.addEventListener('change', (event) => {
    sort('Aircraft', 'timeZone', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_timeZone')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'timeZone', true);
  });
  document.querySelector('#pageStatsAircraft_timeZone')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'timeZone', false);
  });

  document.querySelector('#pageSelectSortAircraft_airportId')?.addEventListener('change', (event) => {
    sort('Aircraft', 'airportId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_airportId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'airportId', true);
  });
  document.querySelector('#pageStatsAircraft_airportId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'airportId', false);
  });

  document.querySelector('#pageSelectSortAircraft_address')?.addEventListener('change', (event) => {
    sort('Aircraft', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'address', true);
  });
  document.querySelector('#pageStatsAircraft_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'address', false);
  });

  document.querySelector('#pageSelectSortAircraft_path')?.addEventListener('change', (event) => {
    sort('Aircraft', 'path', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_path')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'path', true);
  });
  document.querySelector('#pageStatsAircraft_path')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'path', false);
  });

  document.querySelector('#pageSelectSortAircraft_departureDate')?.addEventListener('change', (event) => {
    sort('Aircraft', 'departureDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_departureDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'departureDate', true);
  });
  document.querySelector('#pageStatsAircraft_departureDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'departureDate', false);
  });

  document.querySelector('#pageSelectSortAircraft_alternateName')?.addEventListener('change', (event) => {
    sort('Aircraft', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'alternateName', true);
  });
  document.querySelector('#pageStatsAircraft_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortAircraft_simulation')?.addEventListener('change', (event) => {
    sort('Aircraft', 'simulation', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_simulation')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'simulation', true);
  });
  document.querySelector('#pageStatsAircraft_simulation')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'simulation', false);
  });

  document.querySelector('#pageSelectSortAircraft_arrivalDate')?.addEventListener('change', (event) => {
    sort('Aircraft', 'arrivalDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_arrivalDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'arrivalDate', true);
  });
  document.querySelector('#pageStatsAircraft_arrivalDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'arrivalDate', false);
  });

  document.querySelector('#pageSelectSortAircraft_avgSpeedInMph')?.addEventListener('change', (event) => {
    sort('Aircraft', 'avgSpeedInMph', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_avgSpeedInMph')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'avgSpeedInMph', true);
  });
  document.querySelector('#pageStatsAircraft_avgSpeedInMph')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'avgSpeedInMph', false);
  });

  document.querySelector('#pageSelectSortAircraft_belongsToAircraftModel')?.addEventListener('change', (event) => {
    sort('Aircraft', 'belongsToAircraftModel', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_belongsToAircraftModel')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'belongsToAircraftModel', true);
  });
  document.querySelector('#pageStatsAircraft_belongsToAircraftModel')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'belongsToAircraftModel', false);
  });

  document.querySelector('#pageSelectSortAircraft_simulationDelayMillis')?.addEventListener('change', (event) => {
    sort('Aircraft', 'simulationDelayMillis', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_simulationDelayMillis')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'simulationDelayMillis', true);
  });
  document.querySelector('#pageStatsAircraft_simulationDelayMillis')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'simulationDelayMillis', false);
  });

  document.querySelector('#pageSelectSortAircraft_dataProvider')?.addEventListener('change', (event) => {
    sort('Aircraft', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'dataProvider', true);
  });
  document.querySelector('#pageStatsAircraft_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortAircraft_dateCreated')?.addEventListener('change', (event) => {
    sort('Aircraft', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'dateCreated', true);
  });
  document.querySelector('#pageStatsAircraft_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortAircraft_dateIssued')?.addEventListener('change', (event) => {
    sort('Aircraft', 'dateIssued', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_dateIssued')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'dateIssued', true);
  });
  document.querySelector('#pageStatsAircraft_dateIssued')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'dateIssued', false);
  });

  document.querySelector('#pageSelectSortAircraft_dateModified')?.addEventListener('change', (event) => {
    sort('Aircraft', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'dateModified', true);
  });
  document.querySelector('#pageStatsAircraft_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortAircraft_heading')?.addEventListener('change', (event) => {
    sort('Aircraft', 'heading', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_heading')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'heading', true);
  });
  document.querySelector('#pageStatsAircraft_heading')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'heading', false);
  });

  document.querySelector('#pageSelectSortAircraft_isOnGround')?.addEventListener('change', (event) => {
    sort('Aircraft', 'isOnGround', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_isOnGround')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'isOnGround', true);
  });
  document.querySelector('#pageStatsAircraft_isOnGround')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'isOnGround', false);
  });

  document.querySelector('#pageSelectSortAircraft_owner')?.addEventListener('change', (event) => {
    sort('Aircraft', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'owner', true);
  });
  document.querySelector('#pageStatsAircraft_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'owner', false);
  });

  document.querySelector('#pageSelectSortAircraft_registration')?.addEventListener('change', (event) => {
    sort('Aircraft', 'registration', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_registration')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'registration', true);
  });
  document.querySelector('#pageStatsAircraft_registration')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'registration', false);
  });

  document.querySelector('#pageSelectSortAircraft_seeAlso')?.addEventListener('change', (event) => {
    sort('Aircraft', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'seeAlso', true);
  });
  document.querySelector('#pageStatsAircraft_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortAircraft_source')?.addEventListener('change', (event) => {
    sort('Aircraft', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'source', true);
  });
  document.querySelector('#pageStatsAircraft_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'source', false);
  });

  document.querySelector('#pageSelectSortAircraft_speed')?.addEventListener('change', (event) => {
    sort('Aircraft', 'speed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_speed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'speed', true);
  });
  document.querySelector('#pageStatsAircraft_speed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'speed', false);
  });

  document.querySelector('#pageSelectSortAircraft_verticalSpeed')?.addEventListener('change', (event) => {
    sort('Aircraft', 'verticalSpeed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_verticalSpeed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'verticalSpeed', true);
  });
  document.querySelector('#pageStatsAircraft_verticalSpeed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'verticalSpeed', false);
  });

  document.querySelector('#pageSelectSortAircraft_name')?.addEventListener('change', (event) => {
    sort('Aircraft', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'name', true);
  });
  document.querySelector('#pageStatsAircraft_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'name', false);
  });

  document.querySelector('#pageSelectSortAircraft_description')?.addEventListener('change', (event) => {
    sort('Aircraft', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'description', true);
  });
  document.querySelector('#pageStatsAircraft_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'description', false);
  });

  document.querySelector('#pageSelectSortAircraft_location')?.addEventListener('change', (event) => {
    sort('Aircraft', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'location', true);
  });
  document.querySelector('#pageStatsAircraft_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'location', false);
  });

  document.querySelector('#pageSelectSortAircraft_color')?.addEventListener('change', (event) => {
    sort('Aircraft', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'color', true);
  });
  document.querySelector('#pageStatsAircraft_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'color', false);
  });

  document.querySelector('#pageSelectSortAircraft_id')?.addEventListener('change', (event) => {
    sort('Aircraft', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'id', true);
  });
  document.querySelector('#pageStatsAircraft_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'id', false);
  });

  document.querySelector('#pageSelectSortAircraft_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Aircraft', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsAircraft_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortAircraft_ngsildPath')?.addEventListener('change', (event) => {
    sort('Aircraft', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsAircraft_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortAircraft_ngsildContext')?.addEventListener('change', (event) => {
    sort('Aircraft', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsAircraft_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortAircraft_ngsildData')?.addEventListener('change', (event) => {
    sort('Aircraft', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'ngsildData', true);
  });
  document.querySelector('#pageStatsAircraft_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortAircraft_altitude')?.addEventListener('change', (event) => {
    sort('Aircraft', 'altitude', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_altitude')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'altitude', true);
  });
  document.querySelector('#pageStatsAircraft_altitude')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'altitude', false);
  });

  document.querySelector('#pageSelectSortAircraft_pitch')?.addEventListener('change', (event) => {
    sort('Aircraft', 'pitch', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_pitch')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'pitch', true);
  });
  document.querySelector('#pageStatsAircraft_pitch')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'pitch', false);
  });

  document.querySelector('#pageSelectSortAircraft_yaw')?.addEventListener('change', (event) => {
    sort('Aircraft', 'yaw', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_yaw')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'yaw', true);
  });
  document.querySelector('#pageStatsAircraft_yaw')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'yaw', false);
  });

  document.querySelector('#pageSelectSortAircraft_roll')?.addEventListener('change', (event) => {
    sort('Aircraft', 'roll', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_roll')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'roll', true);
  });
  document.querySelector('#pageStatsAircraft_roll')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'roll', false);
  });

  document.querySelector('#pageSelectSortAircraft_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Aircraft', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAircraft_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAircraft_classSimpleName')?.addEventListener('change', (event) => {
    sort('Aircraft', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsAircraft_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortAircraft_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Aircraft', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsAircraft_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortAircraft_sessionId')?.addEventListener('change', (event) => {
    sort('Aircraft', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'sessionId', true);
  });
  document.querySelector('#pageStatsAircraft_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortAircraft_userKey')?.addEventListener('change', (event) => {
    sort('Aircraft', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'userKey', true);
  });
  document.querySelector('#pageStatsAircraft_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'userKey', false);
  });

  document.querySelector('#pageSelectSortAircraft_saves')?.addEventListener('change', (event) => {
    sort('Aircraft', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'saves', true);
  });
  document.querySelector('#pageStatsAircraft_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'saves', false);
  });

  document.querySelector('#pageSelectSortAircraft_objectTitle')?.addEventListener('change', (event) => {
    sort('Aircraft', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAircraft_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAircraft_displayPage')?.addEventListener('change', (event) => {
    sort('Aircraft', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'displayPage', true);
  });
  document.querySelector('#pageStatsAircraft_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAircraft_editPage')?.addEventListener('change', (event) => {
    sort('Aircraft', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'editPage', true);
  });
  document.querySelector('#pageStatsAircraft_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAircraft_userPage')?.addEventListener('change', (event) => {
    sort('Aircraft', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'userPage', true);
  });
  document.querySelector('#pageStatsAircraft_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'userPage', false);
  });

  document.querySelector('#pageSelectSortAircraft_download')?.addEventListener('change', (event) => {
    sort('Aircraft', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'download', true);
  });
  document.querySelector('#pageStatsAircraft_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'download', false);
  });

  document.querySelector('#pageSelectSortAircraft_objectSuggest')?.addEventListener('change', (event) => {
    sort('Aircraft', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsAircraft_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortAircraft_objectText')?.addEventListener('change', (event) => {
    sort('Aircraft', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'objectText', true);
  });
  document.querySelector('#pageStatsAircraft_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'objectText', false);
  });

  document.querySelector('#pageSelectSortAircraft_solrId')?.addEventListener('change', (event) => {
    sort('Aircraft', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'solrId', true);
  });
  document.querySelector('#pageStatsAircraft_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'solrId', false);
  });

  document.querySelector('#pageSelectSortAircraft_entityShortId')?.addEventListener('change', (event) => {
    sort('Aircraft', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'entityShortId', true);
  });
  document.querySelector('#pageStatsAircraft_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortAircraft_rotation')?.addEventListener('change', (event) => {
    sort('Aircraft', 'rotation', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_rotation')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'rotation', true);
  });
  document.querySelector('#pageStatsAircraft_rotation')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'rotation', false);
  });

  document.querySelector('#pageSelectSortAircraft_areaServedColors')?.addEventListener('change', (event) => {
    sort('Aircraft', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsAircraft_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortAircraft_areaServedTitles')?.addEventListener('change', (event) => {
    sort('Aircraft', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAircraft_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Aircraft', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsAircraft_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Aircraft', 'areaServedTitles', false);
  });
          document.querySelector('#fqAircraft_created')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_created')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_created')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_archived')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_address')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_address')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_address')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_path')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_path')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_path')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_path')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_path')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_path')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_departureDate')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_departureDate')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_departureDate')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_departureDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_departureDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_departureDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_alternateName')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_alternateName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_alternateName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_arrivalDate')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_arrivalDate')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_arrivalDate')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_avgSpeedInMph')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_avgSpeedInMph')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_belongsToAircraftModel')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_belongsToAircraftModel')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_belongsToAircraftModel')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_belongsToAircraftModel')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_belongsToAircraftModel')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_belongsToAircraftModel')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_dataProvider')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_dataProvider')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_dateCreated')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_dateCreated')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_dateIssued')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_dateIssued')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_dateIssued')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_dateIssued')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_dateIssued')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_dateIssued')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_dateModified')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_dateModified')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_dateModified')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_heading')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_heading')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_heading')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_heading')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_heading')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_heading')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_isOnGround')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_isOnGround')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_isOnGround')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_isOnGround')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_isOnGround')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_isOnGround')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_owner')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_owner')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_owner')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_registration')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_registration')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_registration')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_registration')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_registration')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_registration')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_seeAlso')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_seeAlso')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_source')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_source')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_source')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_source')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_source')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_speed')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_speed')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_speed')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_speed')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_speed')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_speed')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_verticalSpeed')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_verticalSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_verticalSpeed')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_verticalSpeed')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_verticalSpeed')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_verticalSpeed')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_name')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_name')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_name')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_description')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_description')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_description')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_location')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_location')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_location')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_color')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_color')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_color')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_id')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_id')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_id')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_altitude')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_altitude')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_altitude')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_altitude')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_altitude')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_altitude')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_pitch')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_pitch')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_pitch')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_pitch')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_pitch')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_pitch')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_yaw')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_yaw')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_yaw')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_yaw')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_yaw')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_yaw')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_roll')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_roll')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_roll')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_roll')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_roll')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_roll')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_displayPage')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_editPage')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_userPage')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_download')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_download')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_download')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#fqAircraft_entityShortId')?.addEventListener('change', (event) => {
            fqChange('Aircraft', event.currentTarget, facetChangeAircraftSuccess, facetChangeAircraftError);
          });
          document.querySelector('#buttonFacetAircraft_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAircraft_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAircraft_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAircraft_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Aircraft', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAircraft_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Aircraft', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteAircraft')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteAircraft(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterAircraft')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAircraft(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
