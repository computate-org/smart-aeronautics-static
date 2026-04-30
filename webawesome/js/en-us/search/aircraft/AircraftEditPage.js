Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Aircraft_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Aircraft_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Aircraft_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Aircraft_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH address
          document.querySelector('#Aircraft_Page_address')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAddress', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_address')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_address')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.reportValidity();
          });

          // PATCH path
          document.querySelector('#Aircraft_Page_path')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_path');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPath', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_path')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_path')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_path');
            const valid = form.reportValidity();
          });

          // PATCH departureDate
          document.querySelector('#Aircraft_Page_departureDate')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_departureDate');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setDepartureDate', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Aircraft_Page_departureDate')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_departureDate')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_departureDate');
            const valid = form.reportValidity();
          });

          // PATCH alternateName
          document.querySelector('#Aircraft_Page_alternateName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAlternateName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_alternateName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_alternateName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.reportValidity();
          });

          // PATCH simulation
          document.querySelector('#Aircraft_Page_simulation')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_simulation');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSimulation', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_simulation')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_simulation')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_simulation');
            const valid = form.reportValidity();
          });

          // PATCH arrivalDate
          document.querySelector('#Aircraft_Page_arrivalDate')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_arrivalDate');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setArrivalDate', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Aircraft_Page_arrivalDate')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_arrivalDate')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_arrivalDate');
            const valid = form.reportValidity();
          });

          // PATCH avgSpeedInMph
          document.querySelector('#Aircraft_Page_avgSpeedInMph')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_avgSpeedInMph');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAvgSpeedInMph', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_avgSpeedInMph')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_avgSpeedInMph')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_avgSpeedInMph');
            const valid = form.reportValidity();
          });

          // PATCH belongsToAircraftModel
          document.querySelector('#Aircraft_Page_belongsToAircraftModel')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_belongsToAircraftModel');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setBelongsToAircraftModel', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_belongsToAircraftModel')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_belongsToAircraftModel')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_belongsToAircraftModel');
            const valid = form.reportValidity();
          });

          // PATCH simulationDelayMillis
          document.querySelector('#Aircraft_Page_simulationDelayMillis')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_simulationDelayMillis');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSimulationDelayMillis', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_simulationDelayMillis')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_simulationDelayMillis')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_simulationDelayMillis');
            const valid = form.reportValidity();
          });

          // PATCH dataProvider
          document.querySelector('#Aircraft_Page_dataProvider')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDataProvider', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_dataProvider')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_dataProvider')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.reportValidity();
          });

          // PATCH dateCreated
          document.querySelector('#Aircraft_Page_dateCreated')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateCreated', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_dateCreated')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_dateCreated')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.reportValidity();
          });

          // PATCH dateIssued
          document.querySelector('#Aircraft_Page_dateIssued')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateIssued');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateIssued', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_dateIssued')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_dateIssued')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateIssued');
            const valid = form.reportValidity();
          });

          // PATCH dateModified
          document.querySelector('#Aircraft_Page_dateModified')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateModified', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_dateModified')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_dateModified')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.reportValidity();
          });

          // PATCH heading
          document.querySelector('#Aircraft_Page_heading')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_heading');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setHeading', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_heading')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_heading')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_heading');
            const valid = form.reportValidity();
          });

          // PATCH isOnGround
          document.querySelector('#Aircraft_Page_isOnGround')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isOnGround');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIsOnGround', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_isOnGround')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_isOnGround')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isOnGround');
            const valid = form.reportValidity();
          });

          // PATCH owner
          document.querySelector('#Aircraft_Page_owner')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setOwner', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_owner')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_owner')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.reportValidity();
          });

          // PATCH registration
          document.querySelector('#Aircraft_Page_registration')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_registration');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRegistration', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_registration')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_registration')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_registration');
            const valid = form.reportValidity();
          });

          // PATCH seeAlso
          document.querySelector('#Aircraft_Page_seeAlso')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSeeAlso', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_seeAlso')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_seeAlso')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.reportValidity();
          });

          // PATCH source
          document.querySelector('#Aircraft_Page_source')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_source')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_source')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.reportValidity();
          });

          // PATCH speed
          document.querySelector('#Aircraft_Page_speed')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_speed');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSpeed', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_speed')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_speed')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_speed');
            const valid = form.reportValidity();
          });

          // PATCH verticalSpeed
          document.querySelector('#Aircraft_Page_verticalSpeed')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_verticalSpeed');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setVerticalSpeed', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_verticalSpeed')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_verticalSpeed')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_verticalSpeed');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Aircraft_Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Aircraft_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Aircraft_Page_location')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_location')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_location')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH color
          document.querySelector('#Aircraft_Page_color')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_color');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setColor', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_color')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_color')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_color');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Aircraft_Page_id')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_id')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_id')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Aircraft_Page_ngsildTenant')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_ngsildTenant')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_ngsildTenant')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Aircraft_Page_ngsildPath')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_ngsildPath')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_ngsildPath')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Aircraft_Page_ngsildContext')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_ngsildContext')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_ngsildContext')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Aircraft_Page_ngsildData')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_ngsildData')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_ngsildData')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH altitude
          document.querySelector('#Aircraft_Page_altitude')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_altitude');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAltitude', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_altitude')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_altitude')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_altitude');
            const valid = form.reportValidity();
          });

          // PATCH pitch
          document.querySelector('#Aircraft_Page_pitch')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pitch');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPitch', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_pitch')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_pitch')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pitch');
            const valid = form.reportValidity();
          });

          // PATCH yaw
          document.querySelector('#Aircraft_Page_yaw')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_yaw');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setYaw', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_yaw')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_yaw')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_yaw');
            const valid = form.reportValidity();
          });

          // PATCH roll
          document.querySelector('#Aircraft_Page_roll')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_roll');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRoll', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_roll')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_roll')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_roll');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Aircraft_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Aircraft_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Aircraft_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Aircraft_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Aircraft_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Aircraft_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Aircraft_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH entityShortId
          document.querySelector('#Aircraft_Page_entityShortId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_entityShortId');
            const valid = form.checkValidity();
            if(valid) {
              patchAircraftVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setEntityShortId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Aircraft_Page_entityShortId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Aircraft_Page_entityShortId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_entityShortId');
            const valid = form.reportValidity();
          });
});
