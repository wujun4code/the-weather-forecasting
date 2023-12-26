#!/usr/bin/env sh

        URL=minio:9001
	    USERNAME=sysadmin
	    PASSWORD=sys4dm1n
	    BUCKET=dicoding
	    FILE_NAME=$(basename $6)
	    OBJ_PATH="/${BUCKET}/$5/${FILE_NAME}"

	    # Static Vars
	    DATE=$(date -R --utc)
	    CONTENT_TYPE='application/gzip'
	    SIG_STRING="PUT\n\n${CONTENT_TYPE}\n${DATE}\n${OBJ_PATH}"
	    SIGNATURE=`echo -en ${SIG_STRING} | openssl sha1 -hmac ${PASSWORD} -binary | base64`

sh 'curl --silent -v -X PUT -T "${FILE}" -H "Host: $URL" -H "Date: ${DATE}" -H "Content-Type: ${CONTENT_TYPE}" -H "Authorization: AWS ${USERNAME}:${SIGNATURE}" https://$URL${OBJ_PATH}'