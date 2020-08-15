import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '../vuex';
import { PopupType } from '../types';

@Module({ name: 'common', store, dynamic: true })
class Common extends VuexModule {
    public createChannel: PopupType = {
        status: false
    }

    // 新建渠道
    @Action
    public toggleCreateChannel(data: PopupType) {
        this.TOGGLE_CREATE_CHANNEL(data);
    }

    @Mutation
    private TOGGLE_CREATE_CHANNEL(data: PopupType) {
        this.createChannel = data;
    }
}

export default getModule(Common);
