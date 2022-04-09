# Need to install sentry-cli and set your sentry auth token by `sentry-cli login`

SENTRY_ORG=<YOUR_SENTRY_ORG>
SENTRY_PROJECT=<YOUR_SENTRY_PROJECT>
ENVIRONMENT=<YOUR_SENTRY_PROJECT_ENVIRONMENT>
VERSION=`sentry-cli releases propose-version`

release_sentry_local:
	sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(VERSION)
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(VERSION) upload-sourcemaps ./build/static/js/ --url-prefix "~/static/js"
	sentry-cli releases -o $(SENTRY_ORG) set-commits -p $(SENTRY_PROJECT) --auto $(VERSION) --ignore-empty
	sentry-cli releases -o $(SENTRY_ORG) finalize -p $(SENTRY_PROJECT) $(VERSION)
	sentry-cli releases -o $(SENTRY_ORG) deploys $(VERSION) new -p $(SENTRY_PROJECT) -e $(ENVIRONMENT)
