FROM quay.io/openshift-assisted/assisted-installer-ui-repo-builder AS repo
ARG AIUI_APP_CLUSTER_PERMISSIONS
ARG AIUI_APP_IMAGE_REPO
ARG AIUI_APP_API_ROOT
ARG AIUI_APP_GIT_SHA
ARG AIUI_APP_VERSION
ENV AIUI_APP_CLUSTER_PERMISSIONS=$AIUI_APP_CLUSTER_PERMISSIONS
ENV AIUI_APP_IMAGE_REPO=$AIUI_APP_IMAGE_REPO
ENV AIUI_APP_API_ROOT=$AIUI_APP_API_ROOT
ENV AIUI_APP_GIT_SHA=$AIUI_APP_GIT_SHA
ENV AIUI_APP_VERSION=$AIUI_APP_VERSION
ENV NODE_OPTIONS='--max-old-space-size=8192'
ENV CI='true'
COPY --chown=1001:0 / "${APP_ROOT}/src"
RUN npm i -g corepack && \
    yarn install --immutable && \
    yarn build:all

FROM registry.access.redhat.com/ubi8/nginx-120 AS app
COPY --from=repo /opt/app-root/src/apps/assisted-ui/build/ "${NGINX_APP_ROOT}/src/"
COPY --from=repo /opt/app-root/src/apps/assisted-ui/deploy/ /deploy/
CMD [ "/deploy/start.sh" ]