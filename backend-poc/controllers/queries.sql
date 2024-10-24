
          SELECT MEASURE_TIME, electronic_temperature AS zoneA, NULL AS zoneB, NULL AS zoneC 
          FROM SENSOR_DATA 
          WHERE IP = '192.168.0.17' 
            AND FROM_UNIXTIME(CAST(MEASURE_TIME AS UNSIGNED)) >= NOW() - INTERVAL 300 SECOND

          UNION ALL

          SELECT MEASURE_TIME, NULL AS zoneA, electronic_temperature AS zoneB, temperature_transmitter as zoneC 
          FROM SENSOR_DATA 
          WHERE IP = '192.168.0.16' 
            AND FROM_UNIXTIME(CAST(MEASURE_TIME AS UNSIGNED)) >= NOW() - INTERVAL 300 SECOND

          ORDER BY MEASURE_TIME;