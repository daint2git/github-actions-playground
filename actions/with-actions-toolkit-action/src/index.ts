import * as core from '@actions/core'
import * as github from '@actions/github'

core.info(JSON.stringify(github.context, null, 2))