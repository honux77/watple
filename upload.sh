#!/bin/bash
BUCKET=s3://watple-dev/web
tar cvf watple.tar.gz web/* 
aws s3 cp watple.tar.gz $BUCKET/watple.tar.gz
aws s3 ls $BUCKET/
rm watple.tar.gz

